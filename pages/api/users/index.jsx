import connect from "@/database/connect";
import { getUsers, postUser, putUser } from "@/database/controller";

const handler = async (req, res) => {
  connect().catch(() =>
    res.status(405).json({ error: "Error in connection." })
  );

  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE request." });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};
export default handler;

import Users from "@/model/user";

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});

    if (!users) {
      res.status(404).json({ error: "Users not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

const postUser = async (req, res) => {
  try {
    const user = req.body;
    if (!user) {
      res.status(404).json({ error: "User data not provided." });
    }

    Users.create(user, function (err, data) {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
};

const putUser = async (req, res) => {
  try {
    const user = req.body;
    const { userId } = req.query;
    if (userId && user) {
      await Users.findByIdAndUpdate(userId, user);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "Error in updating the user" });
  } catch (error) {
    res.status(404).json({ error: "Error in updating the user" });
  }
};
putUser;
export { getUsers, postUser, putUser };

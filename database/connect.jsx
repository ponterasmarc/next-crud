import mongoose from "mongoose";

const connect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    connection.readyState === 1 ? console.log("Database connected!") : "";
  } catch (error) {
    return Promise.reject(error);
  }
};
export default connect;

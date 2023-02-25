import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  birthdate: String,
  contact_number: Number,
});

const User = models.user || model("user", userSchema);
export default User;

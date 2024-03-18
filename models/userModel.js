import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Must provide username"],
      unique: [true, "Must be unique"],
    },
    email: {
      type: String,
      required: [true, "Must provide email"],
      unique: [true, "Must be unique"],
    },
    password: {
      type: String,
      required: [true, "Must provide password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

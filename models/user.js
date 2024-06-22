import mongoose from "mongoose";

const BirthdaySchema = new mongoose.Schema({
  dob: { type: Date, required: true },
  name: {
    type: String,
    required: true,
  },
  wishlist: [
    {
      wishTime: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      status: {
        type: Boolean,
        required: true,
        default: true,
      },
    },
  ],
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthday: BirthdaySchema,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

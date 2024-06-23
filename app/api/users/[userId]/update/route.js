import User from "@/models/user";
import ConnectToDB from "@/util";
import bcrypt from "bcryptjs";
export const POST = async (req, { params }) => {
  try {
    await ConnectToDB();
    const { userId } = params;

    const body = await req.json();
    const { name, email, password, phone } = body;

    // const userUpdate = await User.findByIdAndUpdate(userId);
    const user = await User.findById(userId);

    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    if (phone) user.phone = phone;
    await user.save();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to update user", { status: 500 });
  }
};

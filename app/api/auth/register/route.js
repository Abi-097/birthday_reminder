import ConnectToDB from "@/util";
import User from "@/models/user";
import { hash } from "bcryptjs";
export const POST = async (req, res) => {
  try {
    await ConnectToDB();
    const body = await req.json();

    const { name, email, password } = body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response("User already exists", {
        status: 400,
      });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return new Response(JSON.stringify(newUser), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to create a new user", {
      status: 500,
    });
  }
};

import User from "@/models/user";
import ConnectToDB from "@/util";

export const GET = async (req, res) => {
  try {
    await ConnectToDB();

    const allUsers = await User.find();

    return new Response(JSON.stringify(allUsers), { status: 200 });
  } catch (error) {
    return new Response("Failed to get all users", { status: 500 });
  }
};

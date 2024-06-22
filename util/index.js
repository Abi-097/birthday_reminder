import mongoose from "mongoose";

let isConnected = false;

const ConnectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Database is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "WishList",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log("error", error);
  }
};
export default ConnectToDB;

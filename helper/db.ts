import mongoose from "mongoose";
export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MONGODB CONNECTED");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure Mongodb is running." + err
      );
      process.exit();
    });
  } catch (error: any) {
    console.log(error);
  }
}

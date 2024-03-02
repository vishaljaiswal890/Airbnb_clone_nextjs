// import mongoose from "mongoose";

// const config = {
//   isConnected: 0,
// };

// export async function connectDB() {
//   if (config.isConnected) {
//     return;
//   }

//   try {
//     const { connection } = await mongoose.connect(
//       "mongodb://localhost:27017/airbnb"
//     );
//     console.log("Database connected");
//     console.log(connection.readyState);
//     config.isConnected = connection.readyState;
//   } catch (error) {
//     console.error({ "Message from database": error });
//   }
// }
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

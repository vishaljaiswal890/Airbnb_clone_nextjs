import mongoose from "mongoose";

const config = {
    isConnected: 0,
}

export async function connectDB() {

    if (config.isConnected) {
        return;
    }

    try {
        const { connection } = await mongoose.connect('mongodb://localhost:27017/airbnb-clone');
        console.log('Database connected');
        console.log(connection.readyState);
        config.isConnected = connection.readyState;
    } catch (error) {
        console.error({ 'Message from database': error });
    }
}
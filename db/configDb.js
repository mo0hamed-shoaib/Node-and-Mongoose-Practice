import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test");
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error(`MongoDB connection failed: ${err}`);
        process.exit(1);
    }
};

export default connectDB;
import mongoose from 'mongoose';
import { env } from '../env/env';

export const connectDB = async () => {
    await mongoose.connect(env.MONGO_URI as string)
    .then(() => console.log("MongoDB connected... 🚀"))
    .catch((err: any) => console.log("Mongo Error:", err));
}

export const disconnectDB = async () => {
    await mongoose.disconnect()
    .then(() => console.log("MongoDB disconnected"))
    .catch((err: any) => console.log("Mongo Error:", err));
}



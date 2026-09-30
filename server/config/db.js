import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ambika_electric', {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`⚡ MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ MongoDB Connection Notice: Could not connect to MongoDB (${error.message}).`);
    console.warn(`👉 The server will continue running. Inquiries will also be stored in memory fallback if database is unavailable.`);
    return false;
  }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const databaseUrl =
      "YOUR_DATABASE_URL";
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

import mongoose from "mongoose";
import User from "@/models/User";

const connectMongo = async () => {
  if (!process.env.MONGODB_URI) {
    console.group("⚠️ MONGODB_URI missing from .env");
    console.error(
      "It's not mandatory but a database is required for some features like Magic Links, User Management, etc."
    );
    console.error(
      "If you don't need it, you can remove the MongoDB-dependent features"
    );
    console.groupEnd();
    return null;
  }

  try {
    return await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.error("Mongoose Client Error: " + e.message);
    return null;
  }
};

export default connectMongo;

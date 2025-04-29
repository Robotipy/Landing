import { MongoClient } from "mongodb";

// This lib is use just to connect to the database in next-auth.
// We don't use it anywhere else in the API routes—we use mongoose.js instead (to be able to use models)
// See /libs/nextauth.js file.

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  console.group("⚠️ MONGODB_URI missing from .env");
  console.error(
    "It's not mandatory but a database is required for some features like Magic Links, User Management, etc."
  );
  console.error(
    "If you don't need it, you can remove the MongoDB-dependent features"
  );
  console.groupEnd();
  clientPromise = null;
} else {
  try {
    if (process.env.NODE_ENV === "development") {
      if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
      }
      clientPromise = global._mongoClientPromise;
    } else {
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }
  } catch (e) {
    console.error("MongoDB Client Error: " + e.message);
    clientPromise = null;
  }
}

export default clientPromise;

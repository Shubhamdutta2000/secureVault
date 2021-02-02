import mongoose from "mongoose";

// SAMPLE DATAS
import { userData } from "./backend/data/userData.js";

// config
import connectDB from "./backend/config/db.js";
import dotenv from "dotenv";

// MODELS
import { UserModel } from "./backend/models/User.js";

//  Loads .env file contents into | process.env
dotenv.config();

//  Connect database
connectDB();

//  ADD ALL SAMPLE DATAS TO DATABASE
const importData = async () => {
  try {
    // Delete All previous data on database
    await UserModel.deleteMany();

    // User data inserted to database
    await UserModel.create(userData);
    console.log(`Data imported successfully `);
    process.exit();
  } catch (error) {
    console.log(`ERROR in importing: ${error}`);
    process.exit(1);
  }
};

/////////////////////     DELETE ALL DATA FROM DATABASE   /////////////////////////

const deleteData = async () => {
  try {
    // Delete All previous data on database
    await User.deleteMany();
    console.log(`Data deleted successfully `);
    process.exit();
  } catch (error) {
    console.log(`ERROR in deleting: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  deleteData();
} else {
  importData();
}

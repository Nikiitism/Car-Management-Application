import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import carRoute from "./route/car.route.js";
import cors from 'cors'
import userRoute from "./route/user.route.js";


const app = express();
app.use(cors());
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

// defining routes
app.use("/car", carRoute);
app.use("/users", userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

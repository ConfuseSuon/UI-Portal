import cors from 'cors';
import dotenv from "dotenv";
import express, { Application } from "express";
import mongoose from "mongoose";
import userRouter from '../routes/user';

dotenv.config();

const app: Application = express();


// Middleware for parsing request body
app.use(express.json())


// Middleware for handling CORS POLICY
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET, PUT, POST, DELETE'],
  allowedHeaders: ['Content-Type']
}))

// defining routes
app.use("/api/user", userRouter)


const startServer = async () => {
  try {
    const response = await mongoose.connect(
      process.env.DB_CONNECTION_STRING as string
    )
    if (response)
      app.listen(process.env.PORT, (): void => {
        console.log("Database connnected succesfully");
        console.log(`Server running on port ${process.env.PORT}`);
      })
  } catch (error) {
    console.log("Error while connecting server");
  }
};

export default startServer;

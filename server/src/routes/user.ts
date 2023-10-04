import express, { Request, Response } from "express";
import { User } from "../models/user";

const userRouter = express.Router();

// Get user
userRouter.get("/", async (req: Request, res: Response) => {
  try {
    const databaseResp = await User.find();
    return res.status(200).send(databaseResp);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
});

// Post user
userRouter.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).send({ message: "Provide all of required field" });
  try {
    // checking user
    const user = await User.findOne({ email });
    if (user) return res.status(400).send({ message: "User already exists" });
    //save user on database
    const databaseResp = await new User({ name, email });
    await databaseResp.save();
    return res.status(200).send({ message: "User created sucessfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

// Delete by id user
userRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const databaseResp = await User.findByIdAndDelete(id);

    if (!databaseResp) {
      return res.status(404).send({ message: "User not found" });
    } else {
      return res.status(200).send({ message: "User deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
});

export default userRouter;

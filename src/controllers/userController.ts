import { Request, Response } from "express";
import UserService from "../services/userService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error("Error getting users:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  static async signUp(req: Request, res: Response) {
    try {
      const { name, email, phoneNumber, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await UserService.createUser({
        name,
        email,
        phoneNumber,
        password: hashedPassword,
      });

      const { password: userPassword, ...restUser } = newUser.dataValues;

      res.status(201).json(restUser);
    } catch (error) {
      console.error("Error signing up user:", error);
      res.status(500).send("Internal Server Error");
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { phone, password } = req.body;

      const user = await UserService.getUserByPhone(phone);

      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.TOKEN_SECRET || "secret",
        {
          expiresIn: "1h",
        }
      );

      const { password: userPassword, ...restUser } = user.dataValues;

      res.status(200).json({ token, user: restUser });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}

export default UserController;

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../../db/models/User";

interface AuthenticatedRequest extends Request {
  user?: any;
}

const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): any => {
  try {
    const authHeader: string | undefined = req.headers["authorization"];
    const token: string | undefined = authHeader && authHeader.split(" ")[1];

    if (token == null)
      return res.status(401).json({ message: "Need to login first!" });

    jwt.verify(
      token,
      process.env.TOKEN_SECRET as string,
      (err: any, user: any) => {
        if (err) return res.status(403).json({ message: "Token not valid!" });
        req.user = user;
        next();
      }
    );
  } catch (err) {
    res.status(401).json({ message: err });
  }
};

export default authenticateToken;

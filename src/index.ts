import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import { sequelize } from "../db/models";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes);

app.use((err: any, req: Request, res: Response) => {
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Server is running on http://localhost:${PORT}`);
});

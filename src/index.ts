import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes);

// Error handling middleware
app.use((err: any, req: Request, res: Response) => {
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

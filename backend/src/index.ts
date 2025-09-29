import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.ts";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

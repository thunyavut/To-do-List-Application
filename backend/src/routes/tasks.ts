import { Router } from "express";
import { Task } from "../types/task.ts";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "../db/tasks.json");

const readTasks = (): Task[] => {
  if (!fs.existsSync(dbPath)) return [];
  const data = fs.readFileSync(dbPath, "utf-8");
  return data ? JSON.parse(data) : [];
};

const writeTasks = (tasks: Task[]) => {
  fs.writeFileSync(dbPath, JSON.stringify(tasks, null, 2));
};

// GET with pagination
router.get("/", (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const tasks = readTasks();
  const start = (page - 1) * limit;
  const paginated = tasks.slice(start, start + limit);

  res.json({
    data: paginated,
    total: tasks.length,
    page,
    totalPages: Math.ceil(tasks.length / limit),
  });
});

// POST
router.post("/", async (req, res) => {
  const tasks = readTasks();
  const newTask: Task = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description || "",
    completed: false,
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT (replace)
router.put("/:id", (req, res) => {
  const tasks = readTasks();
  const id = req.params.id;
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  tasks[index] = { ...req.body, id };
  writeTasks(tasks);
  res.json(tasks[index]);
});

// PATCH (partial update)
router.patch("/:id", (req, res) => {
  const tasks = readTasks();
  const id = req.params.id;
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  Object.assign(task, req.body);
  writeTasks(tasks);
  res.json(task);
});

// DELETE
router.delete("/:id", (req, res) => {
  let tasks = readTasks();
  const id = req.params.id;
  tasks = tasks.filter((t) => t.id !== id);
  writeTasks(tasks);
  res.json({ message: "Deleted" });
});

export default router;

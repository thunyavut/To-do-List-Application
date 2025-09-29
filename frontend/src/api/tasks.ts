import api from "./axios";
import { Task } from "../types/Task";
import { CreateTaskDto, UpdateTaskDto, PaginatedResponse } from "../types/dto";

// GET with pagination
export const getTasks = async (
  page: number,
  limit: number = 10
): Promise<PaginatedResponse<Task>> => {
  const res = await api.get(`/tasks?page=${page}&limit=${limit}`);
  return res.data;
};

// CREATE
export const createTask = async (payload: CreateTaskDto): Promise<Task> => {
  const res = await api.post("/tasks", payload);
  return res.data;
};

// UPDATE (partial)
export const updateTask = async (
  id: Task["id"],
  payload: UpdateTaskDto
): Promise<Task> => {
  const res = await api.patch(`/tasks/${id}`, payload);
  return res.data;
};

// DELETE
export const deleteTask = async (
  id: Task["id"]
): Promise<{ message: string }> => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};

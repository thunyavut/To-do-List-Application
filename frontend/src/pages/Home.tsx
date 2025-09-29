import React, { useEffect, useState } from "react";
import { Task } from "../types/Task";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Pagination from "../components/Pagination";
import { CircularProgress } from "@mui/material";
import { getTasks, createTask, updateTask, deleteTask } from "../api/tasks";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchTasks = async (pageNum: number = page) => {
    try {
      setLoading(true);
      const res = await getTasks(pageNum, 10);
      setTasks(res.data);
      setTotalPages(res.totalPages);
      setPage(res.page);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (title: string, description: string) => {
    await createTask({ title, description });
    fetchTasks(1);
  };

  const handleUpdate = async (id: Task["id"], updates: Partial<Task>) => {
    await updateTask(id, updates);
    fetchTasks(page);
  };

  const handleDelete = async (id: Task["id"]) => {
    await deleteTask(id);
    fetchTasks(page);
  };

  useEffect(() => {
    fetchTasks(page);
  }, []);

  return (
    <div className="space-y-10">
      <TaskForm onAdd={handleAdd} />
      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : (
        <TaskList
          tasks={tasks}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      )}
      <Pagination page={page} totalPages={totalPages} onChange={fetchTasks} />
    </div>
  );
};

export default Home;

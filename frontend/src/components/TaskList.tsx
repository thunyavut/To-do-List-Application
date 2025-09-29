import React, { useState } from "react";
import { Task } from "../types/Task";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  TextField,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

interface TaskListProps {
  tasks: Task[];
  onUpdate: (id: Task["id"], updates: Partial<Task>) => void;
  onDelete: (id: Task["id"]) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState<Task["id"] | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const startEdit = (task: Task) => {
    setEditingId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description || "");
  };

  const saveEdit = (id: Task["id"]) => {
    onUpdate(id, { title: editTitle, description: editDescription });
    setEditingId(null);
  };

  return (
    <List className="bg-gray-50 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:bg-white [&::-webkit-scrollbar-thumb]:hover:!cursor-pointer [&::-webkit-scrollbar-thumb]:!rounded-full [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-secondary/85 !rounded-2xl divide-y overflow-auto max-md:max-h-[calc(30vh)] max-h-[calc(50vh)]">
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox
            checked={task.completed}
            onChange={(e) => onUpdate(task.id, { completed: e.target.checked })}
          />
          {editingId === task.id ? (
            <div className="w-full flex gap-4">
              <div className="flex flex-col gap-2 w-full">
                <TextField
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  fullWidth
                />
                <TextField
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  fullWidth
                />
              </div>
              <div className="flex h-min self-center">
                <IconButton onClick={() => saveEdit(task.id)}>
                  <SaveIcon />
                </IconButton>
                <IconButton onClick={() => setEditingId(null)}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>
          ) : (
            <div className="w-full flex gap-4">
              <ListItemText
                primary={task.title}
                secondary={task.description}
                className={task.completed ? "line-through text-gray-500" : ""}
              />
              <div className="flex h-min self-center">
                <IconButton onClick={() => startEdit(task)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(task.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          )}
        </ListItem>
      ))}
      {tasks.length === 0 && (
        <div className="p-4 text-center text-gray-500">No tasks found</div>
      )}
    </List>
  );
};

export default TaskList;

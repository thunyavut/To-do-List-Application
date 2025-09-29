import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";

interface TaskFormProps {
  onAdd: (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3"
    >
      <TextField
        label="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        className="[&_fieldset]:!rounded-xl"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        className="[&_fieldset]:!rounded-xl"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="!font-semibold !text-white !rounded-xl"
      >
        Add
      </Button>
    </Box>
  );
};

export default TaskForm;

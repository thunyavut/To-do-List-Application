import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Container maxWidth="md" className="!p-0">
        <Paper elevation={4} className="p-10 max-md:p-8 !rounded-2xl shadow-lg">
          <Typography
            variant="h4"
            align="center"
            className="!mb-8 max-md:!mb-6 !font-bold !text-secondary"
          >
            To-do List
          </Typography>
          <Home />
        </Paper>
      </Container>
    </div>
  );
}

export default App;

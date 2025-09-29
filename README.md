# 📝 Full-Stack Todo List App

A simple full-stack Todo List application built with React (frontend) and Express + TypeScript (backend).

The app allows users to:

- Add, edit, delete, and mark tasks as completed.

- Store tasks in a backend API (with UUIDs for unique IDs).

- Display tasks in a modern Material-UI interface with pagination.

---

## 🚀 Features

### Frontend (React + MUI)

- Add a new task with title and description.

- Edit and delete existing tasks.

- Mark tasks as complete/incomplete.

- Pagination for large task lists.

- Custom MUI theme (Orange = primary, Black = secondary).

### Backend (Express + TypeScript)

- RESTful API for tasks.

- Each task is assigned a unique UUID.

- Supports CRUD operations:

  - GET /tasks → Fetch all tasks.

  - POST /tasks → Add new task.

  - PUT /tasks/:id → Update task.

  - DELETE /tasks/:id → Remove task.

---

## 📂 Project Structure (Explained)

The project is divided into two main folders: frontend/ and backend/, each with its own purpose and dependencies.

## Backend (backend/)

#### This folder contains the Express + TypeScript server.

- src/index.ts → Entry point of the server. Initializes Express and mounts routes.

- src/routes → Defines all the REST API routes for the application.

- src/types → TypeScript interfaces for Task DTOs.

- package.json → Scripts and dependencies for backend.

- tsconfig.json → TypeScript compiler configuration.

- The backend exposes endpoints like /tasks for creating, reading, updating, and deleting tasks. It also uses UUID to ensure each task has a unique identifier.

## Frontend (frontend/)

#### This folder contains the React application built with TypeScript, Material-UI, and Tailwind CSS.

- src/index.tsx → React entry point, renders the app.

- src/App.tsx → Main container that wraps the app and applies the theme.

- src/components/ → Contains all UI components:

  - TodoForm.tsx → Form to add new tasks.

  - TodoList.tsx → Renders the list of tasks.

  - Pagination.tsx → Handles pagination for task lists.

- src/theme.ts → Custom MUI theme (orange primary, black secondary).

- src/api/ → Axios-based API functions that communicate with the backend.

- package.json → Scripts and dependencies for frontend.

- tsconfig.json → TypeScript configuration.

### Root Folder

- README.md → Documentation (this file).

- Both frontend/ and backend/ are independent projects with their own dependencies.

---

## 🛠️ Technologies Used

### Frontend

- React → UI framework.

- Material-UI (MUI) → Prebuilt components, theming.

- TypeScript → Type safety.

### Backend

- Express.js → REST API server.

- TypeScript → Safer server-side code.

- UUID → For generating unique IDs for each task.

---

## ⚙️ How It Works

### Backend

- Starts an Express server.

- Maintains tasks in memory (or could later be extended to use a DB).

- Exposes REST endpoints for CRUD operations.

### Frontend

- Fetches tasks from backend via API calls.

- Displays them in a styled Todo List.

- Updates UI reactively when tasks are added/edited/deleted.

- Uses pagination to keep the UI clean.

---

## 📦 Installation & Setup

1. Clone the repo
   git clone https://github.com/thunyavut/To-do-List-Application.git
   cd To-do-List-Application

2. Setup Backend
   cd backend
   npm install

# Run in development (TypeScript)

npm run dev

# Or build & run

npm run build
npm start

Backend runs at: http://localhost:3001

3. Setup Frontend
   cd frontend
   npm install
   npm start

Frontend runs at: http://localhost:3000

---

## 🔮 Future Improvements

- Add a calendar view to assign tasks to specific dates.

- Add database support (PostgreSQL, MongoDB, etc.) instead of in-memory storage.

- Implement user authentication for multiple users.

- Deploy with Docker or to a cloud service (AWS, GCP, Vercel).

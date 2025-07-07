import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TodoList from "./components/Todolist";
import "./App.css";

export default function App() {
  return (
    <TaskProvider>
      <TodoList />
    </TaskProvider>
  );
}

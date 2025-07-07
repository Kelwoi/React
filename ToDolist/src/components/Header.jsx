import React from "react";
import { useTasks } from "../context/TaskContext";

export default function Header() {
  const { incompleteCount } = useTasks();
  return (
    <h1 className="header">
      My To Do List
      <span className="task-count"> ({incompleteCount} left)</span>
    </h1>
  );
}

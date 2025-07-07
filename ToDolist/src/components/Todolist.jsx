import React from "react";
import { useTasks } from "../context/TaskContext";
import Header from "./Header";
import Task from "./Task";

export default function TodoList() {
  const { tasks } = useTasks();

  return (
    <div className="todo-container">
      <Header />
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} index={index} />
        ))}
      </div>
    </div>
  );
}

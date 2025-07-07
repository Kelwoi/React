import React, { createContext, useContext, useState } from "react";

const tasksData = [
  { text: "Hit the gym", date: "01.04.2023", done: false },
  { text: "Pay bills", done: true, important: true },
  { text: "Meet John", done: false },
  { text: "Buy eggs", date: "29.03.2023", done: false, important: true },
  { text: "Read a book", done: true },
  { text: "Organize office", done: false },
  { text: "Eat dinner", done: false },
  { text: "Buy apples", date: "05.03.2023", done: false, important: true },
  { text: "Meet George", done: false, important: true },
  { text: "Feed the cat", done: false },
  { text: "Write a letter", done: true },
  { text: "Run 1 km", date: "15.01.2022", done: false },
];

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(tasksData);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  const incompleteCount = tasks.filter((task) => !task.done).length;

  return (
    <TaskContext.Provider value={{ tasks, toggleTask, incompleteCount }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

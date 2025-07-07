import React from "react";
import { useTasks } from "../context/TaskContext";

export default function Task({ task, index }) {
  const { toggleTask } = useTasks();
  const rowClass = index % 2 === 0 ? "row blue" : "row gray";
  const completed = task.done ? "done" : "";

  return (
    <div className={`${rowClass}`} onClick={() => toggleTask(index)}>
      <div className="task-left">
        <input type="checkbox" checked={task.done} readOnly />
        {task.important && !task.done && <span className="important">❗</span>}
        <span className={`task-text ${completed}`}>{task.text}</span>
      </div>
      {task.date && <span className="task-date">{task.date}</span>}
    </div>
  );
}

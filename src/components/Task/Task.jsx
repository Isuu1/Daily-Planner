import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";

const Task = ({ task }) => {
  const { handleTaskState } = useStateContext();

  return (
    <div className="task">
      <div className="task__priority">
        <p
          //Different class is being addded to urgent and not urgent tasks
          className={`task__priority__label ${
            task.state === "completed"
              ? "task-completed"
              : task.urgent
              ? "task-urgent"
              : "task-noturgent"
          }`}
        >
          {task.state === "completed"
            ? "Completed"
            : task.urgent
            ? "Urgent"
            : "Not urgent"}
        </p>
      </div>

      <div className="task__inputs">
        <p>{task.title}</p>
        <input className="task__inputs__checkbox" type="checkbox" />
        <span
          className={`new-checkbox ${
            task.state === "completed" ? "checkbox-completed" : ""
          }`}
          onClick={() => handleTaskState(task.id)}
        ></span>

        {/* <input
        className="task__title"
        type="text"
        placeholder="Task..."
      /> */}
        {/* <button>+</button> */}
      </div>
    </div>
  );
};

export default Task;

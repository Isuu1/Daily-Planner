import React, { useState } from "react";

//Icons
import { FaPlus } from "react-icons/fa";
import { IoToday } from "react-icons/io5";
import Task from "../../components/Task/Task";
import { useStateContext } from "../../context/StateContext";

const Tasks = () => {
  const { tasks } = useStateContext();

  const [taskCategory, setTaskCategory] = useState("ongoing");

  const filteredTasks = tasks.filter(
    (task) => task.state === taskCategory
  );

  return (
    <div className="tasks">
      <div className="tasks__nav-bar">
        <ul className="tasks__nav-bar__menu">
          <li
            className={`tasks__nav-bar__menu__item ${
              taskCategory === "ongoing" ? "task-nav-active" : ""
            }`}
            onClick={() => setTaskCategory("ongoing")}
          >
            Ongoing
          </li>
          <li
            className={`tasks__nav-bar__menu__item ${
              taskCategory === "completed" ? "task-nav-active" : ""
            }`}
            onClick={() => setTaskCategory("completed")}
          >
            Completed
          </li>
        </ul>
        {/* <button className="tasks__nav-bar__button">
          <FaPlus />
        </button> */}
      </div>
      <div className="tasks__all">
        <div className="tasks__all__headline">
          <IoToday /> Today 4
          <button className="tasks__all__headline__add-button">
            <FaPlus />
          </button>
        </div>
        {filteredTasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;

import React from "react";

//Icons
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { FaNoteSticky } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { useStateContext } from "../../context/StateContext";

const Sidebar = () => {
  const { notes } = useStateContext();
  console.log(notes);

  return (
    <div className="sidebar">
      <div>
        <h2 className="sidebar__user-info">DailyPlanner</h2>
      </div>
      <ul className="sidebar__menu">
        <li className="sidebar__menu__item">
          <IoHome />
          <p>Home</p>
        </li>
        <li className="sidebar__menu__item">
          <FaTasks />
          Tasks
        </li>
        <li className="sidebar__menu__item">
          <FaDiagramProject />
          Projects
        </li>
        <li className="sidebar__menu__item">
          <FaNoteSticky />
          Notes
        </li>
        <li className="sidebar__menu__item">
          <IoSettings />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

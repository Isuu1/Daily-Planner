import React, { useEffect } from "react";

//Icons
import { FaLock } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { useStateContext } from "../../context/StateContext";

const Note = ({ note }) => {
  console.log("Note", note);

  return (
    <div
      className="note"
      style={{ backgroundColor: note.backgroundColor }}
    >
      <button className="note__pin-button">
        <FaLock />
      </button>
      <button className="note__remove-button">
        <IoIosRemoveCircle />
      </button>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default Note;

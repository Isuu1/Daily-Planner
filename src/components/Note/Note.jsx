import React, { useEffect } from "react";

//Icons
import { FaUnlock } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import { IoIosRemoveCircle } from "react-icons/io";

//Context
import { useStateContext } from "../../context/StateContext";

const Note = ({ note }) => {
  console.log("Note", note);

  return (
    <div
      className="note"
      style={{
        backgroundColor: note.backgroundColor,
        //Dynamically rotate a note when creating it
        // transform: `rotate(${note.rotation}deg)`,
      }}
    >
      <div className="note__buttons">
        <button className="note__buttons__pin-button">
          <FaUnlock />
        </button>
        <button className="note__buttons__remove-button">
          <IoIosRemoveCircle />
        </button>
      </div>

      <h3>{note.title}</h3>
      <p className="note__textarea">{note.content}</p>
    </div>
  );
};

export default Note;

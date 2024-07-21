import React, { useEffect } from "react";

//Icons
import { FaLock } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

const Note = ({ note }) => {
  console.log(note);

  useEffect(() => {
    const noteContainer = document.querySelector(".note");
    noteContainer.style.backgroundColor = note.backgroundColor;
  });

  return (
    <div className="note">
      <button className="note__pin-button">
        <FaLock />
      </button>
      <button className="note__remove-button">
        <IoIosRemoveCircle />
      </button>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {/* <div>
        <p>Color: </p>
        <div
          style={{
            background: "#000",
            width: "10px",
            height: "10px",
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default Note;

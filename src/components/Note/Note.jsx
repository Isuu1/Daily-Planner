import React, { useEffect } from "react";

//Icons
import { FaLock } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";

const Note = () => {
  const note = {
    title: "Test note",
    content:
      "This note is for testing purposes only, just writing something to make a content longer to see how the text behave.",
    backgroundColor: "#f5f77e",
    textColor: "#00000",
  };
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
    </div>
  );
};

export default Note;

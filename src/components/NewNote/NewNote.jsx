import React, { useEffect, useState } from "react";

//Icons
import { IoIosCloseCircle } from "react-icons/io";
import { useStateContext } from "../../context/StateContext";
import ColorPicker from "../ColorPicker/ColorPicker";

const NewNote = () => {
  const {
    setNewNoteModal,
    noteBackground,
    setNoteBackground,
    addNewNote,
    noteTitle,
    setNoteTitle,
    noteContent,
    setNoteContent,
  } = useStateContext();

  //Change note modal color to match color picked by user
  useEffect(() => {
    const noteContainer = document.querySelector(".newnote-modal");
    if (noteContainer) {
      noteContainer.style.backgroundColor = noteBackground;
    }
  }, [noteBackground]);
  return (
    <div className="newnote-modal">
      <ColorPicker />
      <button
        className="newnote-modal__closebutton"
        onClick={() => setNewNoteModal(false)}
      >
        <IoIosCloseCircle />
      </button>

      <div className="newnote-modal__inputs">
        <input
          className="newnote-modal__inputs__text"
          type="text"
          placeholder="Title..."
          onChange={(e) => setNoteTitle(e.target.value)}
        ></input>
        <textarea
          rows="20"
          cols="20"
          className="newnote-modal__inputs__textarea"
          placeholder="Content..."
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>
      </div>

      <button
        className="newnote-modal__add-button"
        onClick={addNewNote}
      >
        +
      </button>
    </div>
  );
};

export default NewNote;

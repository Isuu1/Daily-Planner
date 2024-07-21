import React, { useEffect } from "react";

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
      <button
        className="newnote-modal__closebutton"
        onClick={() => setNewNoteModal(false)}
      >
        <IoIosCloseCircle />
      </button>
      <div className="newnote-modal__inputs">
        <input
          className="newnote-modal__inputs__input"
          type="text"
          placeholder="Title..."
        ></input>
        <input
          className="newnote-modal__inputs__input"
          type="text"
          placeholder="Content..."
        ></input>
      </div>
      <ColorPicker />
      <button className="notes__addnew-button" onClick={addNewNote}>
        +
      </button>
    </div>
  );
};

export default NewNote;

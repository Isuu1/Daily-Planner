import React from "react";
import Note from "../../components/Note/Note";
import { useStateContext } from "../../context/StateContext";

//Icons
import { IoIosCloseCircle } from "react-icons/io";

const Notes = () => {
  const { notes, addNewNote, newNoteModal, setNewNoteModal } =
    useStateContext();
  console.log("Current notes: ", notes);
  return (
    <div className="notes">
      {newNoteModal && (
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

          <button
            className="notes__addnew-button"
            onClick={addNewNote}
          >
            +
          </button>
        </div>
      )}
      {newNoteModal && <div className="blur"></div>}
      <Note />
      <button
        className="notes__addnew-button"
        onClick={() => setNewNoteModal(true)}
      >
        +
      </button>
    </div>
  );
};

export default Notes;

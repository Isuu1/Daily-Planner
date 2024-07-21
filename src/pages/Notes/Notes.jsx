import React, { useEffect } from "react";
import Note from "../../components/Note/Note";
import { useStateContext } from "../../context/StateContext";

//Icons
import { IoIosCloseCircle } from "react-icons/io";

const Notes = () => {
  const {
    notes,
    addNewNote,
    newNoteModal,
    setNewNoteModal,
    noteBackground,
    setNoteBackground,
  } = useStateContext();
  console.log("Current notes: ", notes);

  useEffect(() => {
    const noteContainer = document.querySelector(".newnote-modal");
    if (noteContainer) {
      noteContainer.style.backgroundColor = noteBackground;
    }
  }, [noteBackground]);
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
            <div>
              <p>Color: </p>
              <div
                onClick={() => setNoteBackground("#000")}
                style={{
                  background: "#000",
                  width: "10px",
                  height: "10px",
                }}
              ></div>
            </div>
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
      {notes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
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

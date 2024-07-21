import React, { useEffect } from "react";
import Note from "../../components/Note/Note";
import { useStateContext } from "../../context/StateContext";

//Icons
import NewNote from "../../components/NewNote/NewNote";

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

  return (
    <div className="notes">
      {newNoteModal && <NewNote />}
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

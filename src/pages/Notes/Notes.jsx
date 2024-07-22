import React, { useEffect } from "react";
import Note from "../../components/Note/Note";
import { useStateContext } from "../../context/StateContext";
import NewNote from "../../components/NewNote/NewNote";
//Icons

import { IoIosAddCircle } from "react-icons/io";

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
    <>
      <div className="notes">
        <button
          className="notes__addnew-button"
          onClick={() => setNewNoteModal(true)}
        >
          <IoIosAddCircle />
        </button>
        {newNoteModal && <NewNote />}
        {newNoteModal && <div className="blur"></div>}
        {notes.map((note) => {
          return <Note note={note} key={note.id} />;
        })}
      </div>
    </>
  );
};

export default Notes;

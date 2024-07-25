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
        <div className="notes__sidebar">
          <button
            className="notes__sidebar__addnew-button"
            onClick={() => setNewNoteModal(true)}
          >
            <IoIosAddCircle /> New
          </button>
        </div>

        {newNoteModal && <NewNote />}
        {newNoteModal && <div className="blur"></div>}
        {notes.map((note, index) => {
          return <Note note={note} index={index} key={note.id} />;
        })}
      </div>
    </>
  );
};

export default Notes;

import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      title: "Test and first note",
      content: "some content",
    },
  ]);
  const [newNoteModal, setNewNoteModal] = useState(false);

  const addNewNote = () => {
    console.log("Testing add new note function");
    const newNote = {
      title: "New note",
      content: "some content",
    };
    setNotes((prevItems) => [...prevItems, newNote]);
  };

  return (
    <Context.Provider
      value={{
        notes,
        setNotes,
        newNoteModal,
        setNewNoteModal,
        addNewNote,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Test and first note",
      content: "some content",
      backgroundColor: "#f5f77e",
    },
  ]);
  const [newNoteModal, setNewNoteModal] = useState(false);
  const [noteBackground, setNoteBackground] = useState("#f5f77e");

  const addNewNote = () => {
    console.log("Testing add new note function");
    const newNote = {
      id: uuidv4(),
      title: "New note",
      content: "some content",
      backgroundColor: noteBackground,
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
        noteBackground,
        setNoteBackground,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

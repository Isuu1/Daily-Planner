import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [newNoteModal, setNewNoteModal] = useState(false);
  const [noteBackground, setNoteBackground] = useState("#f5f77e");
  const [noteTitle, setNoteTitle] = useState();
  const [noteContent, setNoteContent] = useState();
  const [lockNote, setLockNote] = useState(false);

  const addNewNote = () => {
    console.log(
      "Note background in add new note function: ",
      noteBackground
    );

    if (!noteTitle || !noteContent) {
      alert("Please provide title and content");
      return;
    }
    //Generate random number to define note rotation
    let randomNumber = Math.floor(Math.random() * 9) - 4;
    console.log("Random number: ", randomNumber);
    const newNote = {
      id: uuidv4(),
      title: noteTitle,
      content: noteContent,
      backgroundColor: noteBackground,
      rotation: randomNumber,
      locked: false,
    };
    setNotes((prevItems) => [...prevItems, newNote]);
    //Close new note modal
    setNewNoteModal(false);
    //Reset content and title values
    setNoteTitle([]);
    setNoteContent([]);
  };

  const handleNoteLockStatus = (id) => {
    console.log(id);
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
        noteTitle,
        setNoteTitle,
        noteContent,
        setNoteContent,
        lockNote,
        setLockNote,
        handleNoteLockStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

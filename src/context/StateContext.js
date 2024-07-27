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
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Jestem gejem na przyklad",
      state: "ongoing",
      urgent: false,
    },
    {
      id: 2,
      title: "Drugie testowe cos tam csot tam",
      state: "completed",
      urgent: true,
    },
    {
      id: 3,
      title: "Trzecie testowe cos tam csot tam",
      state: "completed",
      urgent: true,
    },
    {
      id: 3,
      title: "Trzecie testowe cos tam csot tam",
      state: "ongoing",
      urgent: true,
    },
  ]);

  const addNewNote = () => {
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

  const deleteNote = (id) => {
    let newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
  };

  const handleTaskState = (id) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.map((task) =>
        task.id === id ? { ...task, state: "completed" } : task
      );
      return newTasks;
    });
  };
  console.log(tasks);

  // const handleNoteLockStatus = (id) => {
  //   console.log("Current note id: ", id);
  //   setLockNote(!lockNote);
  //   let currentNoteIndex = notes.findIndex((note) => note.id === id);
  //   const newNote = { ...notes[currentNoteIndex], locked: lockNote };
  //   const updatedNotes = [...notes];
  //   updatedNotes.splice(currentNoteIndex, 1); // Remove the note from its current position
  //   updatedNotes.unshift(newNote); // Add the updated note to the front
  //   setNotes(updatedNotes);
  //   console.log("New ntoe: ", newNote);
  // };

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
        deleteNote,
        tasks,
        setTasks,
        lockNote,
        handleTaskState,
        // setLockNote,
        // handleNoteLockStatus,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

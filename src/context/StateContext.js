import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [notes, setNotes] = useState(["test note"]);

  return (
    <Context.Provider value={{ notes, setNotes }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

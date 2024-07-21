import React from "react";
import Note from "../../components/Note/Note";

const Notes = () => {
  return (
    <div className="notes">
      <Note />
      <button className="notes__addnew-button">+</button>
    </div>
  );
};

export default Notes;

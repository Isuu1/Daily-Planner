import React from "react";
import { useStateContext } from "../../context/StateContext";

const ColorPicker = () => {
  const {
    setNewNoteModal,
    noteBackground,
    setNoteBackground,
    addNewNote,
  } = useStateContext();
  return (
    <div className="color-picker">
      <p>Color: </p>
      <div
        className="color-picker__color"
        onClick={() => setNoteBackground("#7ee764")}
        style={{
          background: "#7ee764",
        }}
      ></div>
      <div
        className="color-picker__color"
        onClick={() => setNoteBackground("#7ef7d9")}
        style={{
          background: "#7ef7d9",
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;

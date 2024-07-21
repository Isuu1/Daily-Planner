import React from "react";
import { useStateContext } from "../../context/StateContext";

const ColorPicker = () => {
  const { setNoteBackground } = useStateContext();
  return (
    <div className="color-picker">
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

      <div
        className="color-picker__color"
        onClick={() => setNoteBackground("#e48eed")}
        style={{
          background: "#e48eed",
        }}
      ></div>
      <div
        className="color-picker__color"
        onClick={() => setNoteBackground("#ebc063")}
        style={{
          background: "#ebc063",
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;

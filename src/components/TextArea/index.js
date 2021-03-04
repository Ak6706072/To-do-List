import React from "react";

const TextArea = ({ input, setInputValue, addTodos }) => {
  const setValue = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="p-5 text-center bg-success">
      <textarea
        id="task"
        onChange={setValue}
        cols="45"
        rows="1"
        placeholder="type todo item"
      ></textarea>{" "}
      <br />
      <button id="btn" onClick={addTodos}>
        Save
      </button>
    </div>
  );
};
export default TextArea;

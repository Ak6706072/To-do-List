import React from "react";

const Todo = (props) => {
  const modifyTask = (event) => {
    props.setInputValue(event.target.value);
  };
  return (
    <div className="mb-2">
      {props.id} == {props.task}
      {props.isEditing !== true ? (
        <span className="mb-1">
          <button
            className="mx-2  rounded bg-primary text-warning"
            onClick={() => props.editTask(props.id)}
          >
            Edit
          </button>
          <button
            className=" rounded bg-primary text-warning"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete
          </button>
        </span>
      ) : (
        <span>
          <textarea
            id="task"
            onChange={modifyTask}
            cols="25"
            rows="1"
          ></textarea>
          <button
            onClick={() => props.saveTask(props.id)}
            className=" rounded bg-primary text-warning"
          >
            Save
          </button>
        </span>
      )}
    </div>
  );
};
export default Todo;

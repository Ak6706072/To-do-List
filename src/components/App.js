import React from "react";
import "./../styles/App.css";
import { useState, useEffect } from "react";
import TextArea from "./TextArea";

import Todo from "./Todo";
const tasks = [
  { id: 1, task: "hello", isEditing: false },
  { id: 2, task: "hii", isEditing: false },
];
function App() {
  const [input, setInputValue] = useState("");
  const [task, setTask] = useState(tasks);

  const addTodos = () => {
    if (!input) {
      return;
    }

    setTask((prevState) => [
      ...prevState,
      { id: task.length + 1, task: input, isEditing: false },
    ]);
  };
  const editTask = (id) => {
    const flag = task.some((tsk) => {
      return tsk.isEditing == true;
    });
    // console.log(flag, task);
    if (flag == true) {
      return;
    }
    //find the index of that object
    let index = task.findIndex((obj) => obj.id == id);
    //created the copy of that object
    let copyObj = task.find((tsk) => id === tsk.id);
    // console.log(copyObj);
    copyObj = { ...copyObj, isEditing: true };
    setTask((prev) => [...prev.splice(0, index), copyObj, ...prev.splice(1)]);
  };
  const deleteTask = (id) => {
    let index = task.findIndex((tsk) => tsk.id == id);
    console.log(task, index, id);
    setTask((prev) => [...prev.splice(0, index), ...prev.splice(1)]);
  };

  const saveTask = (id) => {
    //find the index of that object
    let index = task.findIndex((obj) => obj.id == id);
    //created the copy of that object
    let copyObj = task.find((tsk) => id === tsk.id);

    copyObj = { ...copyObj, task: input, isEditing: false };
    console.log(copyObj);
    setTask((prev) => [...prev.splice(0, index), copyObj, ...prev.splice(1)]);
  };
  return (
    <div id="main">
      {/* //Do not alter main div //Please do not alter the functional component as
      tests depend on the type of component. */}

      <TextArea
        input={input}
        setInputValue={setInputValue}
        addTodos={addTodos}
      />
      <div className="p-5 text-center ">
        {task.map((obj) => {
          return (
            <Todo
              className="list"
              key={obj.id}
              id={obj.id}
              task={obj.task}
              editTask={editTask}
              deleteTask={deleteTask}
              isEditing={obj.isEditing}
              input={input}
              setInputValue={setInputValue}
              saveTask={saveData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

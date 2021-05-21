import React, { useState } from "react";

function AddTask(props) {
  const [newTask, setNewTask] = useState("");
  return (
    <div>
      <input
        style={{ background: props.error ? "red" : "" }}
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          props.addTask(newTask);
          setNewTask("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;

import React from "react";

function Todo(props) {
  return (
    <div>
      <span>{props.task.description}</span>
      <button onClick={() => props.deleteTask(props.task.id)}>Delete</button>
      <button onClick={props.changeStatus}>✅</button>
    </div>
  );
}

export default Todo;

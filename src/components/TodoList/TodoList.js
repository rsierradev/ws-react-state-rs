import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      {props.tasks.map((task, key) => (
        <Todo
          task={task}
          key={key}
          deleteTask={props.deleteTask}
          changeStatus={props.changeStatus}
        />
      ))}
    </div>
  );
}

export default TodoList;

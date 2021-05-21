import React, { useState } from "react";
import AddTask from "./components/TodoList/AddTask";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const _tasks = [
    {
      id: 1,
      description: "Shower",
      status: false,
    },
    {
      id: 2,
      description: "Cook",
      status: false,
    },
    {
      id: 3,
      description: "Read GoMYCode content",
      status: false,
    },
  ];

  const [tasks, setTasks] = useState(_tasks);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function changeStatus(task) {
    console.log("Toggled!");
  }

  function deleteTask(taskID) {
    // tasks.slice(task);
    // setTasks(tasks);
    const mylist = tasks.filter((el) => el.id !== taskID);
    setTasks(mylist);
  }

  function addTask(newTask) {
    setTasks([
      ...tasks,
      { id: Date.now(), status: false, description: newTask },
    ]);
    setError(true);
  }

  return (
    <div>
      <h2>My Task List</h2>
      <TodoList
        tasks={tasks}
        changeStatus={changeStatus}
        deleteTask={deleteTask}
      />
      <AddTask addTask={addTask} error={error} />
    </div>
  );
}

export default App;

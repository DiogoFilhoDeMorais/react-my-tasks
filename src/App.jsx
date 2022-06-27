import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTasks from "./Components/Tasks/Add/AddTasks";
import Tasks from "./Components/Tasks/Tasks";
import DefaultHeader from "./Components/Headers/Default";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdd = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskDelete = (taskId) => {
    const newList = tasks.filter((task) => task.id !== taskId);
    setTasks(newList);
  };

  const handleClickTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <DefaultHeader />
      <AddTasks handleTaskAdd={handleTaskAdd} />
      <Tasks
        tasks={tasks}
        handleClickTask={handleClickTask}
        handleTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default App;

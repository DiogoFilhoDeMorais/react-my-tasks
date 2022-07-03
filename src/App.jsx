import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import DefaultHeader from "./Components/Headers/Default";
import TaskDetail from "./Components/Tasks/Detail/TaskDetail";
import HomePage from "./Components/Pages/Home";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  });

  const handleTaskAdd = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];

    if (taskTitle.length > 2) setTasks(newTask);
  };

  const handleTaskDelete = (taskId) => {
    const newList = tasks.filter((task) => task.id !== taskId);
    setTasks(newList);
  };

  const handleClickTaskCheck = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <DefaultHeader />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage
                handleTaskAdd={handleTaskAdd}
                tasks={tasks}
                handleTaskDelete={handleTaskDelete}
                handleClickTaskCheck={handleClickTaskCheck}
              />
            }
          ></Route>
          <Route
            path="/task/:id"
            exact
            element={<TaskDetail tasks={tasks} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import AddTasks from "../Tasks/Add/AddTasks";
import Tasks from "../Tasks/Tasks";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
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

    if (taskTitle.length > 2) setTasks(newTask);
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
    <div>
      <AddTasks handleTaskAdd={handleTaskAdd} />
      <Tasks
        tasks={tasks}
        handleClickTask={handleClickTask}
        handleTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default Home;

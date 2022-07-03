import React from "react";
import Task from "./Task/Task";

const Tasks = ({ tasks, handleClickTaskCheck, handleTaskDelete }) => {
  return tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleClickTaskCheck={handleClickTaskCheck}
      handleTaskDelete={handleTaskDelete}
    />
  ));
};

export default Tasks;
import React from "react";
import Task from "./Task/Task";

const Tasks = ({tasks, handleClickTask, handleTaskDelete}) => {
    return tasks.map((task) => (
      <Task
        task={task}
        handleClickTask={handleClickTask}
        handleTaskDelete={handleTaskDelete}
      />
    ));
}

export default Tasks;
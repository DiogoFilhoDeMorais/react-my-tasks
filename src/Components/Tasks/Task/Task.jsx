import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleClickTask, handleTaskDelete }) => {
  return (
    <div
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
      className="task-container"
    >
      <div
        className="task-title"
        onClick={() => {
          handleClickTask(task.id);
        }}
      >
        {task.title}
      </div>
      <div className="task-buttons">
        <button onClick={() => {}}>
          <CgInfo />
        </button>
        <button
          onClick={() => {
            handleTaskDelete(task.id);
          }}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;

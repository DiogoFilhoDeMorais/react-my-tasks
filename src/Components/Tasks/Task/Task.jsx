import "./Task.css";
import { useNavigate } from "react-router-dom";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleClickTaskCheck, handleTaskDelete }) => {
  const navigate = useNavigate();

  const handleOpenTaskDetail = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <div
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
      className="task-container"
    >
      <div
        className="task-title"
        onClick={() => {
          handleClickTaskCheck(task.id);
        }}
      >
        {task.title}
      </div>
      <div className="task-buttons">
        <button
          onClick={() => {
            handleOpenTaskDetail();
          }}
        >
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

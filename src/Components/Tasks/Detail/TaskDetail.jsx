// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import Button from "../../Buttons/Button";

const TaskDetail = ({ tasks }) => {
  const param = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({});

  const showTask = (_task) => {
    setTask(_task);
  };

  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.cypress.io/todos/${param.id}`
      );
      data.title = data.title.toUpperCase();
      showTask(data);
    };
    fetchTask();
  });

  const goHome = () => {
    setTask(null);
    navigate("/");
  };

  return (
    <div>
      <div className="task-detail-container">
        <h2>{task.title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          semper accumsan luctus. Vivamus facilisis ante et augue imperdiet, vel
          faucibus quam dignissim. Vestibulum sit amet dui sodales, gravida
          tellus sed, accumsan massa. Morbi laoreet vestibulum lorem. Vivamus
          sollicitudin bibendum est in viverra. Cras nec consectetur arcu. Nunc
          semper faucibus felis id tincidunt.
        </p>
        <p>
          <small>id: {param.id}</small>
        </p>
      </div>
      <div className="back-button-container">
        <Button onClick={goHome}>Voltar</Button>
      </div>
    </div>
  );
};

export default TaskDetail;

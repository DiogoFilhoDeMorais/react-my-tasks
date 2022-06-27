import { useState } from "react";
import Button from "../../Buttons/Button";
import "./AddTask.css";

const AddTasks = ({ handleTaskAdd }) => {
  const [inputData, setInputData] = useState("");

  const handleInputData = (event) => {
    setInputData(event.target.value);
  };

  const handleClickButton = () => {
    handleTaskAdd(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputData}
        value={inputData}
        className="add-task-input"
        placeholder="Digite a tarefa ..."
        type="text"
      />

      <div className="add-task-button">
        <Button onClick={handleClickButton}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTasks;

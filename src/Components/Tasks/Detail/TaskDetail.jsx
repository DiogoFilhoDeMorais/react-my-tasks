import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "../../Buttons/Button";

const TaskDetail = () => {
  return (
    <div>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-detail-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          semper accumsan luctus. Vivamus facilisis ante et augue imperdiet, vel
          faucibus quam dignissim. Vestibulum sit amet dui sodales, gravida
          tellus sed, accumsan massa. Morbi laoreet vestibulum lorem. Vivamus
          sollicitudin bibendum est in viverra. Cras nec consectetur arcu. Nunc
          semper faucibus felis id tincidunt.
        </p>
      </div>
    </div>
  );
};

export default TaskDetail;

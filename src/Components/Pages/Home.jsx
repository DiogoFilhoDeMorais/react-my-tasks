import AddTasks from "../Tasks/Add/AddTasks";
import Tasks from "../Tasks/Tasks";

const HomePage = ({
  handleTaskAdd,
  tasks,
  handleClickTaskCheck,
  handleTaskDelete,
}) => {
  return (
    <div>
      <AddTasks handleTaskAdd={handleTaskAdd} />
      <Tasks
        tasks={tasks}
        handleClickTaskCheck={handleClickTaskCheck}
        handleTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default HomePage;

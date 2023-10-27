import { React, useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import TASK from "../../Molecules/Task";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (indexCom) => {
    const filteredTaskList = taskList.filter(
      (element, index) => index !== indexCom
    );
    setTaskList(filteredTaskList);
  };

  const onTaskNameChange = (value, index) => {
    const taskListCopy = [...taskList];
    if (value === "") {
      setTaskList(taskListCopy.filter((_, indexCom) => indexCom !== index));
    } else {
      taskListCopy[index].name = value;
      setTaskList(taskListCopy);
    }
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}></AddTaskButton>
      <StyledTaskList>
        {taskList.map((task, index) => (
          <TASK
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default TodoCard;

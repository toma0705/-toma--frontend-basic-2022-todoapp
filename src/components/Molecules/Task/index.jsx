import React, { useState } from "react";
import Checkbox from "../../Atoms/Checkbox/index.jsx";
import Input from "../../Atoms/Input/index.jsx";
import EditButton from "../../Atoms/EditButton/index.jsx";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONT_FAMILY from "../../../variables/font_family";
import TEXTS from "../../../variables/texts";

const Task = ({ onTaskChange, onTaskComplete, taskName, defaultIsEditing }) => {
  const [isEditing, setEditing] = useState(defaultIsEditing);

  const onEditButtonClick = () => {
    setEditing(true);
  };

  const onEditComplete = (value) => {
    setEditing(false);
    onTaskChange(value);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 2px 6px;
  margin-top: 10px;
`;

const StyledCheckboxWrapper = styled.div`
  display: flex;
`;

const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const StyledTaskName = styled.div`
  font-family: ${FONT_FAMILY.NOTO_SANS};
  ${TEXTS.S}
  color: ${COLOR.LIGHT_GRAY};
  width: 100%;
`;

const StyledEditButtonWrapper = styled.div`
  display: flex;
`;

export default Task;

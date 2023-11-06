import React from "react";
import TodoCard from "../../Organisms/TodoCard";
import Title from "../../Atoms/Title";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledTodoCardWrapper>
        <TodoCard />
      </StyledTodoCardWrapper>
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    padding: 20px;
  }
  gap: 20px;
`;

const StyledTodoCardWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    max-width: 100%;
  }
`;

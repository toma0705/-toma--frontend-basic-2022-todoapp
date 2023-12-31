import React from "react";
import CHECK from "../../../assets/svg/check.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";

const SampleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyleDiv>
        <img src={CHECK} />
      </StyleDiv>
    </StyledButton>
  );
};

const StyleDiv = styled.div`
  display: none;
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  display: flex;
  background: none;
  border: none;
  align-items: center;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  width: 20px;
  height: 20px;
  padding: 0;
  &:hover ${StyleDiv} {
    cursor: pointer;
    display: flex;
  }
`;

export default SampleButton;

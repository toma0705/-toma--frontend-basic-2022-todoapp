import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color.js";
import styled from "styled-components";

const SampleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledRound />
      <img
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 20,
          height: 20,
        }}
        src={pencil}
      />
    </StyledButton>
  );
};

const StyledRound = styled.div`
  border-radius: 50%;
  position: absolute;
  background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  display: none;
`;

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  position: relative;
  background: none;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;
  &:hover ${StyledRound} {
    display: block;
  }
`;

export default SampleButton;

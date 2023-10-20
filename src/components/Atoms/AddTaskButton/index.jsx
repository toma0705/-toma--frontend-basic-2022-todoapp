import React from "react";
import PLUS from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color.js";
import styled from "styled-components";
import TEXT from "../../../variables/texts.js";
import FONTFAMILY from "../../../variables/font_family.js";

const SampleButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyleDiv>
        <img src={PLUS} />
      </StyleDiv>
      <StyledText>タスクを追加</StyledText>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  background: none;
  border: none;
  align-items: center;
  padding: 2px 6px;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY};
    border-radius: 12px;
    cursor: pointer;
  }
`;

const StyledText = styled.div`
  color: ${COLOR.GREEN};
  ${TEXT.S}
  font-family: ${FONTFAMILY.NOTO_SANS};
  margin-left: 10px;
  font-weight: 500;
`;

const StyleDiv = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
`;

export default SampleButton;

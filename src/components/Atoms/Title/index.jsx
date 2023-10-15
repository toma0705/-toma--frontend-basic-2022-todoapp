import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";
import BREAKPOINT from "../../../variables/breakpoint.js";

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.ROBOTO};
  ${TEXT.M}
  breakpoint: ${BREAKPOINT.MEDIUM}
`;

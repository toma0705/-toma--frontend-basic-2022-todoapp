import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts";

export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);

  const onPressEnter = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.addEventListener("blur", () => {
      onEditComplete(inputRef.current.value);
    });
    inputRef.current.addEventListener("keydown", (e) => onPressEnter(e));
  }, []);

  return <StyledInput ref={inputRef} type="text" />;
};

export default Input;

const StyledInput = styled.input`
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
  color: ${COLOR.LIGHT_GRAY};
  background-color: ${COLOR.BLACK};
  border: none;
  border-radius: 2px;
  padding: 0px 4px;
  width: 100%;
  height: 20px;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

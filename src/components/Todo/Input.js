import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";
import { CHARCODE_ENTER } from "../../utils/constants";


const Input = styled.input`
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  border: none;
  border-radius: 10px;
  outline: none;
  padding-left: 57px;
  background-color: ${props=>props.theme.TodoBGColor};
  color: ${props=>props.theme.TodoFontColor};
  &::placeholder {
    color: hsl(236, 9%, 61%);
  }
  margin-bottom: 25px;
  box-shadow: 7.1px 6px 6.5px rgba(0, 0, 0, 0.058),
    30.8px 26.3px 21.9px rgba(0, 0, 0, 0.074),
    117px 100px 98px rgba(0, 0, 0, 0.11);
`;

const TodoInput = ({ addItem }) => {
  const [content, setContent] = useState("");
  const contentChange = (event) => setContent(event.target.value);
  
  const enterKeyPress = (event) => {
    if (content && event.charCode === CHARCODE_ENTER) {
      addItem((prevItems) => {
        return [{ id: v4(), content, isComplete: false }, ...prevItems];
      });
      setContent("");
    }
  };
  return (
    <Input
      type="text"
      value={content}
      onChange={contentChange}
      onKeyPress={enterKeyPress}
      placeholder="Creat a new todo..."
    />
  );
};

export default TodoInput;

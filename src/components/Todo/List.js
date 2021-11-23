import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./Item";
import { SHOWALL,SHOWACTIVE,SHOWCOMPLETED } from "../../utils/constants";
const List = styled.ul`
  width: 100%;
  box-shadow: 6.5px 5.5px 6.5px rgba(0, 0, 0, 0.036),
    28.5px 24.4px 21.9px rgba(0, 0, 0, 0.078),
    117px 100px 98px rgba(0, 0, 0, 0.11);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  li {
    display: flex;
    justify-content: space-between;
    list-style: none;
    background-color: ${props=>props.theme.TodoBGColor};
    height: 60px;
    border-bottom: 1px solid ${props=>props.theme.SeparationlineColor};

  }
  .checkBox {
    width: 25px;
    height: 25px;
    margin: 17.5px 16px;
    position: relative;
  }
  input[type="checkbox"] {
    position: absolute;
    visibility: hidden;
    width: 25px;
    height: 25px;
  }
  input[type="checkbox"]:checked + label::before,
  input[type="checkbox"]:checked + label::after {
    opacity: 1;
  }
  label {
    cursor: pointer;
    position: absolute;
    width: 25px;
    height: 25px;
    border: 1px solid hsl(233, 11%, 84%);
    border-radius: 50%;
  }
  label::before {
    content: "";
    position: absolute;
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    width: 25px;
    height: 25px;
    border-radius: 50%;
    top: -1px;
    left: -1px;
    opacity: 0;
  }
  label::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 12px;
    border-bottom: 3px solid white;
    border-right: 3px solid white;
    transform: rotate(45deg);
    left: 8.5px;
    top: 4.5px;
    opacity: 0;
  }

  .itemTitle {
    width: 100%;
    display: flex;
    align-items: center;
    color: ${props=>props.theme.TodoFontColor};
  }
  .itemTitle.completed {
    color: ${props=>props.theme.TodoCompleteFontColor};
    text-decoration: line-through;
  }

  button {
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin: 17.5px 16px 17.5px 10px;
    border: none;
    background-color: transparent;
    transition: 0.5s;
  }
  button:hover {
    transform: scale(1.4);
  }
`;
const EmptyItem = styled.li`
  color: ${props=>props.theme.TodoFontColor};
  span {
    line-height: 60px;
    margin: auto;
  }
`;

const TodoList = ({ items, type, setItems }) => {
  const [showItems, setShowItems] = useState(items);
  useEffect(() => {
    if (type === SHOWALL) {
      setShowItems(items);
    } else if (type === SHOWACTIVE) {
      setShowItems(items.filter((item) => item.isComplete === false));
    } else {
      setShowItems(items.filter((item) => item.isComplete === true));
    }
  }, [type, items]);
  return (
    <List>
      {showItems.length ? (
        showItems.map((item) => {
          return <TodoItem key={item.id} item={item} updateItems={setItems} />;
        })
      ) : (
        <EmptyItem>
          <span>
            There's no {type === SHOWCOMPLETED ? "completed" : "active"} Todo
            here.
          </span>
        </EmptyItem>
      )}
    </List>
  );
};
export default TodoList;

import React from "react";
import styled from "styled-components";
import { SHOWALL,SHOWACTIVE,SHOWCOMPLETED } from "../../utils/constants";

const FuncList = styled.div`
  width: 100%;
  position: relative;
  background-color: ${props=>props.theme.TodoBGColor};
  height: 60px;
  line-height: 60px;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0;
  font-size: 14px;
  span {
    color: hsl(236, 9%, 61%);
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-family: "Josefin Sans", sans-serif;
    color: hsl(236, 9%, 61%);
  }
  .toggleBox {
    width: min(40%, 162px);
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  .toggleBox button {
    font-weight: 700;
    color: hsl(236, 9%, 61%);
  }
  .toggleBox button.active {
    color: hsl(220, 98%, 61%);
  }
  @media (max-width: 500px) {
    .toggleBox {
      width: 100%;
      background-color: ${props=>props.theme.TodoBGColor};
      height: 60px;
      position: absolute;
      border-radius: 10px;
      left: 0px;
      top: 85px;
      padding: 0 24% 0;
      box-shadow: 7.1px 6px 6.5px rgba(0, 0, 0, 0.058),
        30.8px 26.3px 21.9px rgba(0, 0, 0, 0.074),
        117px 100px 98px rgba(0, 0, 0, 0.11);
    }
  }
  @media (max-width: 375px) {
    .toggleBox {
      padding: 0 18% 0;
    }
  }
`;

const FunctionalArea = ({ left, type, updateType,updateItems }) => {
  function typeClick(event) {
    updateType(event.target.id)
  }
  function clearCompletedClick() {
    updateItems((prevItems) =>
      prevItems.filter((prevItem) => !prevItem.isComplete)
    );
  }

  return (
    <FuncList>
      <span>{left} items left</span>
      <div className="toggleBox">
        <button id={SHOWALL} onClick={typeClick} className={type===SHOWALL?"active":""}>
          All
        </button>
        <button id={SHOWACTIVE} onClick={typeClick} className={type===SHOWACTIVE?"active":""}>
          Active
        </button>
        <button id={SHOWCOMPLETED} onClick={typeClick} className={type===SHOWCOMPLETED?"active":""}>
          Completed
        </button>
      </div>
      <button onClick={clearCompletedClick}>Clear Completed</button>
    </FuncList>
  );
};
export default FunctionalArea;

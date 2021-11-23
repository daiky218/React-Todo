import React from "react";
import { X } from "react-feather";

const TodoItem = ({ item, updateItems }) => {
  function deleteClick() {
    updateItems((prevItems) =>
      prevItems.filter((prevItem) => prevItem.id !== item.id)
    );
  }
  function completeChange() {
    item.isComplete = !item.isComplete;
    updateItems((prevItems) =>
      prevItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          prevItem.isComplete = item.isComplete;
        }
        return prevItem;
      })
    );
  }
  function completeClass (){
    return item.isComplete?" completed":""
  }
  return (
    <li>
      <div className="checkBox">
        <input type="checkbox" id={item.id} checked={item.isComplete} onChange={completeChange} />
        <label htmlFor={item.id}></label>
      </div>
      <div className={"itemTitle"+completeClass()}>
        <span>{item.content}</span>
      </div>
      <button onClick={deleteClick}>
        <X color={"hsl(236, 9%, 61%)"} size="25px" />
      </button>
    </li>
  );
};
export default TodoItem;

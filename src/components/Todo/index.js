import React, { Fragment, useState } from "react";
import TodoInput from "./Input";
import TodoList from "./List";
import FunctionalArea from "./FunctionalArea";
import { SHOWALL } from "../../utils/constants";


const Todo = () => {
  const [items, setItems] = useState([]);
  const [showType, setShowType] = useState(SHOWALL)
  return (
    <Fragment>
      <TodoInput addItem={setItems} />
      <TodoList items={items} type={showType} setItems={setItems}/>
      <FunctionalArea left={items.filter((item) => !item.isComplete).length} type={showType} updateType={setShowType} updateItems={setItems}/>
    </Fragment>
  );
};
export default Todo;

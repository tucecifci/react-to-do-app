import React from "react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, setTodos }) {
const deleteTodo = (indexToDelete) =>{
const updatedTodos = todos.filter((_, index) => index!== indexToDelete);
setTodos(updatedTodos);
}

  return (
    <div className="container">
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <input type="checkbox" />
          <span>{todo} </span>
          <FaTrash onClick={() => deleteTodo(index)} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;

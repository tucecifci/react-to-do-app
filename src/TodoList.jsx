import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, setTodos }) {
const [completed, setCompleted] = useState([]);
//checkbox
const toggleCompletion = (index) =>{
  if(completed.includes(index)){
    setCompleted(completed.filter((i) => i!== index));
  } else{
    setCompleted([...completed, index]);
  }
}

const deleteTodo = (indexToDelete) =>{
const updatedTodos = todos.filter((_, index) => index!== indexToDelete);
setTodos(updatedTodos);
}

  return (
    <div className="container">
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <input type="checkbox"
          style={{marginRight: '10px'}}
          onChange={() => toggleCompletion(index)}
          />
          <span style={{textDecoration: completed.includes(index) ? "line-through" : "none"}}>{todo} </span>
          <FaTrash onClick={() => deleteTodo(index)} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;

import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

function App() {
  const [input, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]); //listeye ekle
      setInputValue(""); //inputu temizle
      setPopUp(true);

      setTimeout(() => {
        setPopUp(false);
      }, 3000);
    }
  };

  return (
    <>
      {popUp && <div className="popup">Task added!</div>}

      <TodoItem input={input} setInputValue={setInputValue} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

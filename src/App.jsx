import { useState } from 'react'
import './App.css'
import TodoList from './TodoList'
import TodoItem from './TodoItem';

function App() {
  const [input, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () =>{
    if(input.trim()){
      setTodos([...todos, input]); //listeye ekle
      setInputValue(""); //inputu temizle
    } 
  }

  return (
    <>
     <TodoItem input={input} setInputValue={setInputValue} addTodo={addTodo}
     />
     <TodoList todos={todos} setTodos={setTodos} />

    </>
  )
}

export default App

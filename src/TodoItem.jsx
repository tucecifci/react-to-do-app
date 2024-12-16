import React from 'react'


function TodoItem({input, setInputValue, addTodo}) {

  const handleKeyDown = (e) =>{
    if(e.key === "Enter"){
      addTodo();
    }
  };
  
  return (
    <div>
        <h1>To-Do App</h1>
        <input type="text" 
        id='input'
        placeholder='What should ı do'
        value={input}
        onChange={(e)=> setInputValue(e.target.value)}
       onKeyDown={handleKeyDown}
       />
        <button onClick={addTodo} id='btn' >+</button>
    </div>
  )
}

export default TodoItem
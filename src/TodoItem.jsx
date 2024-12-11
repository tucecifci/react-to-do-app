import React from 'react'

function TodoItem({input, setInputValue, addTodo}) {
  return (
    <div>
        <h1>To-Do App</h1>
        <input type="text" 
        placeholder='What should ı do'
        value={input}
        onChange={(e)=> setInputValue(e.target.value)}
        />
        <button onClick={addTodo} >Add Task</button>
    </div>
  )
}

export default TodoItem
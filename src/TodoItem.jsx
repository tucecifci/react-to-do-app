import React from 'react'

function TodoItem({input, setInputValue, addTodo}) {
  return (
    <div>
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
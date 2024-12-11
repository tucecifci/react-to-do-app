import React from 'react'


function TodoList({todos}) {
  return (
    <div  className='container'>
    {todos.map((todo, index) => (
        <div className='todo-item' key={index}>{todo} </div>
    ))}
    </div>
  )
}

export default TodoList
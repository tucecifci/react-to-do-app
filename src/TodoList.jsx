import React from 'react'

function TodoList({todos}) {
  return (
    <div>
    {todos.map((todo, index) => (
        <div key={index}>{todo} </div>
    ))}
    </div>
  )
}

export default TodoList
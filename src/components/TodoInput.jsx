import React, { useState } from 'react'

function TodoInput({handleAddTodos, todoValue, setTodoValue}) {
  return (
    <header>
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} placeholder='Enter todo...' onKeyDown={(event) => {
        if(event.key === 'Enter'){
            handleAddTodos(todoValue);
            setTodoValue('');
        }
      }}/>
        <button onClick={() => {
            handleAddTodos(todoValue);
            setTodoValue('');
        }}>Add</button>
    </header>
  )
}

export default TodoInput


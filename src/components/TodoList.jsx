import React from 'react'
import TodoCard from './TodoCard';

function TodoList(props) {
    const {todos} = props;
  return (
    <ul className='main'>
      {todos.map((todo,index) => {
        return (
            <TodoCard {...props} key={index} index={index}>
                <p>{todo}</p>
            </TodoCard>
        )
      })} 
    </ul>
  )
}

export default TodoList

import { useState, useEffect } from "react";
import TodoList from "./components/TodoList.jsx"
import TodoInput from "./components/todoInput.jsx"


function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue,setTodoValue] = useState('');

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}));
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    
    setTodos(newTodoList);
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if(!localStorage){
      return
    }
    
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return;
    }
    console.log(todos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);

  }, []);
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo = {handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
    </>
  )
}

export default App

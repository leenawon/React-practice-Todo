import React, { useState } from 'react';
import TodoForm from './TodoForm';

function TodoList() {
  const [Todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    } 
    const newTodos = [todo, ...Todos];
    setTodos(newTodos);
  };

  return (
    <div>
      <h3>오늘의 할 일은?🎵</h3>
      <TodoForm onSubmit={addTodo}></TodoForm>
    </div>
  )
}

export default TodoList;

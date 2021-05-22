import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    } 
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const deleteTodo = [...todos].filter(todo => todo.id !== id);
    setTodos(deleteTodo);
  };

  const editTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    } 
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  return (
    <div>
      <h3>오늘의 할 일은?🎵</h3>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo}></Todo>
    </div>
  )
}

export default TodoList;

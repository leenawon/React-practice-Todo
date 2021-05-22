import React, { useState } from 'react';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import TodoForm from './TodoForm';

function Todo({todos, completeTodo, removeTodo, editTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitEdit = (value) => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if(edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit}></TodoForm>;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? "todo_row complete" : "todo_row"} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="todo-icons">
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete_icon" />
        <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className="edit_icon" />
      </div>
    </div>
  ))
}

export default Todo;

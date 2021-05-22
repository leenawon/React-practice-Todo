import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  }

  return (
    <div>
      <form className="todo_form" onSubmit={submitHandler}>
        <input type="text" className="todo_input" placeholder="📌할 일을 입력해주세요" value={input} name="text" onChange={changeHandler}></input>
        <button className="todo_button">추가</button>
      </form>
    </div>
  )
};

export default TodoForm;

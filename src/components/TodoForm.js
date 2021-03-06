import React, { useEffect, useRef, useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  });

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
        {props.edit ? (
          <>
            <input type="text" className="todo_input edit" placeholder="πν  μΌμ λ€μ μλ ₯ν΄μ£ΌμΈμ" value={input} name="text" onChange={changeHandler} ref={inputRef}></input>
            <button className="todo_button edit">μμ </button>
          </>
        ) : (
          <>
            <input type="text" className="todo_input" placeholder="πν  μΌμ μλ ₯ν΄μ£ΌμΈμ" value={input} name="text" onChange={changeHandler} ref={inputRef}></input>
            <button className="todo_button">μΆκ°</button>
          </>
        )}
      </form>
    </div>
  )
};

export default TodoForm;

import React from "react";
import "./TodoForm.css";

const TodoForm = ({ input, setInput, todos, setTodos }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        title: input,
        completed: false,
      },
    ]);
    setInput("");
    console.log(todos);
  };
  return (
    <form className="inputform" onSubmit={handleSubmit}>
      <input
        type="text"
        className="inputbox"
        value={input}
        onChange={handleChange}
      ></input>
      <button className="additem">Add Item</button>
    </form>
  );
};

export default TodoForm;

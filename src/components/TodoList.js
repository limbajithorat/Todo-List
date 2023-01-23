import React from "react";
import "./TodoList.css";
const TodoList = ({ todos, setTodos }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todocontainer">
      <h1 className="heading">TodoList:</h1>
      {todos.map((todo) => (
        <div className="todo-list" key={todo.id}>
          <div className={todo.completed ? "completed" : "list"}>
            {todo.title}
          </div>
          <div>
            <button onClick={() => handleComplete(todo)} className="complete">
              Complete
            </button>
            <button onClick={() => handleDelete(todo)} className="deletetask">
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

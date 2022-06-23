import React from "react";

const Todo = ({ text, todo, setTodos, todos }) => {
  //Events
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo flex justify-between w-full gap-[8px] my-[8px]">
      <li
        className={`todo-item bg-slate-100  pl-[8px] flex justify-between items-center flex-[9] h-[35px] rounded-md w-auto overflow-hidden ${
          todo.completed ? "completed" : ""
        }`}
      >
        {text}
      </li>
      <div className="button--holder flex gap-[8px] flex-1 justify-end">
        <button
          onClick={completeHandler}
          className="complete-btn bg-green-500 h-[35px] w-[35px] md:w-[50px] rounded-md text-white"
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          onClick={deleteHandler}
          className="trash-btn bg-red-500 h-[35px] w-[35px] md:w-[50px] rounded-md text-white"
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;

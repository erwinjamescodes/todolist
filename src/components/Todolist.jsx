import React from "react";
import Todo from "./Todo";

const Todolist = ({ todos, setTodos, filteredTodos, setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <section className=" form  border-2 border-solid rounded-md w-full max-h-[65%] overflow-y-scroll ">
      <div className="form--wrapper rounded-md w-[100%] ">
        <div className="head--holder bg-[#F8F8F8] py-[8px] px-[16px]  flex justify-between ">
          <h4 className="">Tasks</h4>
          <form>
            <select
              name="todos"
              className="filter-todo bg-[#F8F8F8] outline-0"
              onChange={statusHandler}
            >
              <option disabled={true} value="" selected>
                Filter by...
              </option>
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </form>
        </div>
        <div className="tasklist--holder px-[16px] ">
          <ul className="todo-list mt-[8x]">
            {filteredTodos.map((todo) => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                text={todo.text}
                key={todo.id}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Todolist;

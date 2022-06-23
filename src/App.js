import React, { useEffect, useState } from "react";
import "./index.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

const App = () => {
  //useStates
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  // //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div
      className="main w-full h-screen
     pb-[24px] overflow-y-hidden"
    >
      <div className="main--container mt-[24px] md:mt-[24px] w-[90%] md:w-[80%] mx-auto grid">
        <h1 className="text-3xl">To Do List</h1>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <Todolist
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
      </div>
    </div>
  );
};

export default App;

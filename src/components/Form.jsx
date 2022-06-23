import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    if (inputText.length > 0) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.floor(Math.random() * 1000),
        },
      ]);
    }

    setInputText("");
  };

  return (
    <section className="form  rounded-md mb-[16px] h-auto">
      <div className="form--wrapper border-2 border-solid rounded-md">
        <div className="head--holder bg-[#F8F8F8] py-[8px] px-[16px]">
          <h4 className="">Add a Task</h4>
        </div>
        <div className="form--holder py-[16px] px-[16px]">
          <form className="input--holder flex gap-[8px]">
            <input
              onChange={inputTextHandler}
              value={inputText}
              type="text"
              className="w-full p-1 pl-2 border-2 border-solid rounded-md"
              placeholder="What do you want to do..."
              minlength="1"
            ></input>
            <button
              onClick={submitTodoHandler}
              className="todo-button bg-blue-500 w-[50px] rounded-md"
              type="submit"
            >
              <i className="fas fa-plus-square text-white"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

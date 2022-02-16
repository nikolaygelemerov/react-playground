import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const fetchTodos = async () => {
  try {
    // const result = await axios.get(
    //   'https://jsonplaceholder.typicode.com/todos/1'
    // );
  } catch (error) {
    console.error(error);
  }
};

const Todo = props => {
  //   const [todoName, setTodoName] = useState('');
  //   const [todoList, setTodoList] = useState([]);
  const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });

  const inputChangeHandler = event => {
    setTodoState({
      ...todoState,
      userInput: event.target.value
    });
  };

  const todoAddHandler = () => {
    setTodoState({
      ...todoState,
      todoList: [...todoState.todoList, todoState.userInput]
    });
  };

  useEffect(() => {
    fetchTodos();

    return () => {
      console.log(
        'Executes before each new execution of "fetchTodos" and after each "todoState.userInput" update and before unmounting!'
      );
    };
  }, [todoState.userInput]);

  useEffect(() => {
    return () => {
      console.log('Todo component is unmounted!');
    };
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoState.userInput}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoState.todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;

import React, { useCallback, useEffect, useReducer, useState } from 'react';

import axios from 'axios';

const blocker = () => {
  const now = Date.now();

  while (Date.now() < now + 2000) {}
};

const List = props => {
  /* useState  Start ******************************************************/
  const [listState, updateList] = useState([]);

  const setListState = useCallback(async () => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      updateList(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // the timeout callback makes a closure to listState
  // setListItemState is called with listState and by the time
  // the timeout callback is executed its the same value of listState each time
  // const setListItemState = useCallback(async () => {
  //   try {
  //     const result = await axios.get(
  //       'https://jsonplaceholder.typicode.com/todos/1'
  //     );

  //     setTimeout(() => {
  //       console.log('listState.length: ', listState.length);
  //       updateList([...listState, result.data]);
  //     }, 3000);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [listState]);

  // Using prevState works as useReducer, always passes actual state
  const setListItemStateUsePrev = useCallback(async () => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );

      setTimeout(() => {
        updateList(prevState => [...prevState, result.data]); //use this approach instead of [...listState, result.data], because listState isnt updated on every click
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const removeListItemState = useCallback(
    id => {
      const newList = listState.filter(todo => todo.id !== id);

      updateList(newList);
    },
    [listState]
  );

  useEffect(() => {
    console.log('listState.length in useEffect: ', listState.length);

    // this will be executed after new render, but berore the body of useEffect (with old props) and fired or on component unmounting
    // this means that listState above is new prop and here is old in the cleanup callback
    return () =>
      console.log('listState.length in useEffect cleanup: ', listState.length);
  }, [listState]);

  /* useState  End ******************************************************/

  /* useReducer Start ******************************************************/

  const todoListReducer = useCallback((state, { payload, type }) => {
    switch (type) {
      case 'ADD':
        return [...state, payload];

      case 'SET':
        return payload;

      case 'REMOVE':
        const newState = state.filter(todo => todo.id !== payload);

        return newState;

      default:
        return state;
    }
  }, []);

  const [listReducer, dispatch] = useReducer(todoListReducer, []);

  const setListReducer = useCallback(async () => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );

      dispatch({ type: 'SET', payload: result.data });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const setListItemReducer = useCallback(async () => {
    try {
      const result = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );

      setTimeout(() => {
        dispatch({ type: 'ADD', payload: result.data });
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const removeListItemReducer = useCallback(id => {
    dispatch({ type: 'REMOVE', payload: id });
  }, []);

  /* useReducer End ******************************************************/

  useEffect(() => {
    /* useState */
    setListState();

    /* useReducer */
    setListReducer();
  }, [setListReducer, setListState]);

  const [toggle, setToggle] = useState(false);

  const handleToggle = useCallback(() => {
    setTimeout(() => setToggle(!toggle), 300);
  }, [toggle]);

  const handleToggle2 = useCallback(() => {
    setToggle(true);
  }, []);

  return (
    <>
      <div className={'ListState'}>
        <button
          type="button"
          onClick={() => {
            handleToggle2();
            handleToggle();
          }}
        >
          Toggle {toggle ? 'true' : 'false'}
        </button>

        <ul>
          {listState.map(todo => (
            <li key={todo.id}>
              {todo.title}{' '}
              <button
                type="button"
                onClick={() => {
                  removeListItemState(todo.id);
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={setListItemStateUsePrev}>
          Add item state
        </button>
      </div>
      <div className={'ListReducer'}>
        <ul>
          {listReducer.map(todo => {
            return (
              <li key={todo.id}>
                {todo.title}{' '}
                <button
                  type="button"
                  onClick={() => {
                    removeListItemReducer(todo.id);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>

        <button type="button" onClick={setListItemReducer}>
          Add item reducer
        </button>
      </div>
    </>
  );
};

export default List;

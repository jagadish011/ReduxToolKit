import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from '../redux/slices/todo';

const Todo = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useSelector((state) => state.todo);

  const handleFetchTodo = () => {
    dispatch(fetchTodo());
  };

//   useEffect(() => {
//     dispatch(fetchTodo());
//   }, [dispatch]);

  if (isLoading) {
    return <h1>Loading............</h1>;
  }

  if (isError) {
    return <h1>Error loading todos...</h1>;
  }

  return (
    <>
      {/* <button onClick={() => dispatch(fetchTodo())}>Fetch Todo</button> */}
      <button onClick={handleFetchTodo}>Fetch Todo</button>
      {data && data.map((todo) => <h2 key={todo.id}>{todo.title}</h2>)}
    </>
  );
};

export default Todo;

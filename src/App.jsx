import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchTodo } from './redux/slices/todo';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("State", state);

  if(state.todo.isLoading){
    return <h1>Loading............</h1>
  }
  return (
    <>
      <button onClick={(e) => dispatch(fetchTodo())}>Fetch Todo</button>
      {state.todo.data && state.todo.data.map((e)=> <h2>{e.title}</h2>)}
    </>
  )
}

export default App

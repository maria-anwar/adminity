import React,{ useState, useCallback } from 'react'
import Todos from './Todos';

const MyCalls = () => {

    const[todos, setTodos] = useState([]);
    const[count, setCount] = useState(0);

    const increment =()=>{
        setCount(count + 1);
    }
 
    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, 1]);
      }, [todos]);


  return (
    <>
         <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default MyCalls
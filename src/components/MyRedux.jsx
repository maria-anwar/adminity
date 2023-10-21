import React,{ useReducer } from 'react'

function reducer(state, action) {
    console.log(state, action);
    return state;
}
const MyRedux = () => {

    const [state, dispatch] = useReducer(reducer, 10);
    //console.log(state);
   //console.log(dispatch);
    
  return (
    <>
    <div className=' w-screen flex justify-center items-center'>
    <div className='flex flex-col gap-3'> 
        <div className='px-4 py-1.5 text-center text-xl bg-blue-500 text-white rounded-md'>{state}</div>
        <button className='px-4 py-1.5 bg-blue-500 text-white rounded-md' onClick= {() => dispatch({type:"Increment"})} >Increment</button>
        <button className='px-4 py-1.5 bg-blue-500 text-white rounded-md' onClick= {() => dispatch({type:"Increment"})}>Decrement</button>
    </div>
    </div>
    <div>My UseRedux</div>
    </>
  )
}

export default MyRedux
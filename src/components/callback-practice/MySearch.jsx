import React,{useState} from 'react'

const MySearch = ({setNumber,number,getItems,setItems, inputValue,setInputValue}) => {

    //const[inputValue, setInputValue] = useState([]);
    
    const handleSubmit = () =>{

        console.log('Onsubmit is running');
        //setNumber(inputValue);
        //setItems(getItems);
        //setNumber(inputValue);
    }
  
return (
   <>
   <form className='flex gap-2 justify-center mt-10'
    onSubmit={handleSubmit}>
    <input
    type='number'
    placeholder='type here'
    value={number}
    onChange={(e)=>setNumber(e.target.value)}
    className='border px-2'
     />
     <button type='submit' className='px-3 py-1 bg-blue-500 text-white text-base'>Submit</button>
   </form>
   </>
  )
}

export default MySearch

import React,{useEffect,useState,useCallback} from 'react'
import MySearch from './MySearch';

const TableCalls = () => {

    const[number, setNumber] = useState([]);
    const[items, setItems] = useState([]);

    const[inputValue, setInputValue] = useState([]);
     //callback 

     const getItems = useCallback(()=>{
        console.log('callback is running');
        return [number,number+1, number+3];
        
    },[])

     //setItems(getItems);
    // console.log(items);
    // useEffect(()=>{
    //     setItems(getItems);
    //     console.log('useeffect is running');
    //     console.log(items);
    // },[getItems])

  return (
   <>
            <MySearch getItems={getItems} setItems={setItems} number={number} setNumber={setNumber} inputValue={inputValue} setInputValue={setInputValue} />
        <div className='flex flex-col items-center'>
        <h1>My List</h1>
        {
            items.map((item) =>(
                <div className="text-black text-2xl font-light">
                    {item}
                </div>
             ) )
            }
    </div> 
        
   </>
  )
}

export default TableCalls
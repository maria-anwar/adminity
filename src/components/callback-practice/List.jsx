import React,{useEffect,useState} from 'react';

const List = ({getItems}) => {

    console.log("List is Running");
    const[items, setItems] = useState([]);
    
    useEffect(()=>{
        setItems(getItems);
        console.log('useeffect is running');
        console.log(items);
    },[getItems])
    
  return (
    <>
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

export default List
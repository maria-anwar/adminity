import React,{useState,useCallback,useEffect} from 'react'
import List from './List';

const MainCall = () => {
    
    const[number, setNumber] = useState(1);
    const[dark, setDark] = useState(false);

    //callback 
    const getItems = useCallback(()=>{

        console.log("callBack is running");
        return[number, number+1];

    },[number])

    console.log(getItems);
    // const theme = {
    //     backgroundColor: dark ? "#333": "#FFF",
    //     color: dark ? "#FFF": "#333"
    // }

  return (
    <>
        <div >
            
           <List getItems={getItems}/>
           <div>hello</div>
        </div>
    </>
  )
}

export default MainCall
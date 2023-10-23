import React from "react";
import {Navigate} from 'react-router-dom';
import { AuthContext } from "../context/auth-context"; 
import { useContext } from "react";

const Guard = (props)=>{
    const credentails = useContext(AuthContext);
    console.log(credentails);
   // if(props.userData.email) return props.children; //this line will check that either email exists or not
    if(credentails.email) return props.children;
   return <Navigate to = "/login" />
};
export default Guard;
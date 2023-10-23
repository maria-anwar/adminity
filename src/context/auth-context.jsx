import {createContext} from "react"
export const AuthContext = createContext({
    email:'',
    getData: () => {},
    //console.log(getData());
})

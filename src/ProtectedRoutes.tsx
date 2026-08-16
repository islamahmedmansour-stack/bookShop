import { useContext } from "react"
import { Authcontext } from "./context/Authcontext/Authcontext"
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes(props:any) {
    let {userData}:any = useContext(Authcontext);
    if(localStorage.getItem('userToken') || userData){
       return props.children 
    } else {
        return <Navigate to={'/'}/>
    }
}

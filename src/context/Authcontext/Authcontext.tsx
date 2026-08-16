import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";
interface user{
    id:string;
    name:string;
    email:string;
}
interface AuthContextType{
    userData:user|null;
    saveUserData:()=> void
}
interface AuthcontextProviderprops{
    children : ReactNode
}
export let Authcontext = createContext<AuthContextType | null>(null);
export default function AuthcontextProvider({children}:AuthcontextProviderprops) {
    const [userData , setUserData]= useState<user | null>(null);
     const saveUserData=()=>{
        const token = localStorage.getItem('userToken');
        const encodedToken = token ? JSON.parse(token) : null;
        if(encodedToken){
            const decodedToken = jwtDecode<user>(encodedToken);
            setUserData(decodedToken);
        }
     }
useEffect(()=>{
if(localStorage.getItem('userToken')){
    saveUserData()
}
},[])
return(
    <Authcontext.Provider value={{userData,saveUserData}} >{children}</Authcontext.Provider>
)
}

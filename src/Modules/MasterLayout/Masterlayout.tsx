import { Outlet } from "react-router-dom";
import UpperNav from "./UpperNav";
import Footer from "./Footer";

export default function MasterLayout() {
  return (
    <>
      <UpperNav/>
      <Outlet/> 
      <Footer/>     
    </>
  )
}

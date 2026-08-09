import { BsTwitterX } from "react-icons/bs";
import { FaBloggerB, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

export default function UpperNav() {
  return (
    <>
      <div className="container-fluid px-4 d-flex justify-content-between align-items-center text-light upperNavdiv" >
        <div className="d-flex gap-2  align-items-center">
          <FaPhoneAlt />
          <p className=" mb-0">(+20) 01093091869</p>
        </div>
        <div className=" d-flex gap-4">
          <a href="#"> <TfiFacebook /> </a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><BsTwitterX /></a>
          <a href="#"><FaBloggerB /></a>
        </div>
      </div>
    </>
  )
}

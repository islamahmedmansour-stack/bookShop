import { TfiFacebook } from 'react-icons/tfi'
import footerImage from '../../assets/footerlogo.png'
import { FaBloggerB, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
export default function Footer() {
  return (
    <>
      <div className="footerDiv container-fluid">
        <div className=" p-5 row">
          <div className=" col-md-5">
            <img src={footerImage} alt="footerImage" style={{ height: '100px' }} />
            <p>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className='d-flex gap-3'>
              <a href="#"> <TfiFacebook /> </a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><BsTwitterX /></a>
              <a href="#"><FaBloggerB /></a>
            </div>
          </div>
           <div className='col-md-3'>
              <h5>COMPANY</h5>
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">BOOKS</a></li>
                <li><a href="#">NEW RELEASE</a></li>
                <li><a href="#">BLOG </a></li>
              </ul>
            </div>
             <div className='col-md-3'>
              <h5>Importent Links</h5>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

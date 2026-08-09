import profile from './../../../../assets/testImage.png'
import { GoPerson } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <div className=" container-fluid d-flex px-4 py-3 justify-content-between align-items-center navBarDiv ">
                <div>
                    <img src={profile} alt="profile image" />
                </div>
                <div className=' d-flex gap-3'>
                    <h6 className='border-right pe-3' >HOME</h6>
                    <h6 className='border-right pe-3'>ABOUT US</h6>
                    <h6 className='border-right pe-3'>BOOKS</h6>
                    <h6 className='border-right pe-3'>NEW RELEASE</h6>
                    <h6 className='border-right pe-3'>CONTACT US</h6>
                    <h6>BLOG</h6>
                </div>
                <div className=' d-flex'>
                    <GoPerson  size='25px' />
                    <span className='border-right mx-3'></span>
                    <Link to='/dashboard/cart' className='text-dark'>
                    <FaBagShopping size='25px' />
                    </Link>
                    <span className='border-right mx-3'></span>
                    <FaHeart size='25px' />
                </div>
            </div>

        </>
    )
}

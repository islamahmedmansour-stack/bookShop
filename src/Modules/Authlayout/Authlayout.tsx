import { Outlet } from 'react-router-dom'
import AuthImage from '../../assets/AuthImage.jpg'
import BookLogo from '../../assets/booksLogo.png'
export default function Authlayout() {
    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <div className=" col-6 p-0">
                        <img className='w-100 vh-100' src={AuthImage} alt="book shop Auth" />
                    </div>
                    {/* ************************************ */}
                    <div className="col-6 d-flex flex-column align-items-center pt-4  ">
                        <img className='py-3' src={BookLogo} alt="logo" />
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

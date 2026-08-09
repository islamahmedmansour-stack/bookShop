import { Link } from 'react-router-dom'
import book1 from '../../../../assets/books1.png'
import book2 from '../../../../assets/books2.png'
import book3 from '../../../../assets/books3.png'
import book4 from '../../../../assets/books4.png'
export default function NewBook() {
  return (
    <>
    <div className="NewBooks container-fluid py-4 px-2">
      <h3 className="BColor text-center">New Release Books</h3>
      <div className=" row">
        <div className="col-md-3">
            <img className='w-100' src={book1} alt="book one" />
            <div className=' text-center'>
                <h5 className='BColor'>Simple way of piece life</h5>
                <small>Armor Ramsey</small>
                <p className='OColor'>$ 40.00</p>
            </div>
        </div>
        {/* ----------------------------- */}
        <div className="col-md-3">
            <img className='w-100' src={book2} alt="book one" />
            <div className=' text-center'>
                <h5 className='BColor'>Great travel at desert</h5>
                <small>Sanchit Howdy</small>
                <p className='OColor'>$ 38.00</p>
            </div>
        </div>
        {/* ----------------------------- */}
        <div className="col-md-3">
            <img className='w-100' src={book3} alt="book one" />
            <div className=' text-center'>
                <h5 className='BColor'>The lady beauty Scarlett</h5>
                <small>Arthur Doyle</small>
                <p className='OColor'>$ 45.00</p>
            </div>
        </div>
        {/* ----------------------------- */}
        <div className="col-md-3">
            <img className='w-100' src={book4} alt="book one" />
            <div className=' text-center'>
                <h5 className='BColor'>Once upon a time</h5>
                <small>Klien Marry</small>
                <p className='OColor'>$ 35.00</p>
            </div>
        </div>
        {/* ----------------------------- */}
      </div>
      <div className='text-center my-3'>
        <Link className='purple-button p-2 text-decoration-none ' to='/dashBoard/Books'>View all products</Link>
      </div>
    </div>
    </>
  )
}

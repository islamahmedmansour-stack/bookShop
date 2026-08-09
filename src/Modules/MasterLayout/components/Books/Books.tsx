import book1 from '../../../../assets/books1.png'
export default function Books() {
  return (
    <>
      <div className=" container-fluid">
        <div className=" row">
          <div className=" col-3">

          </div>
          {/* ------------------------- */}
          <div className=" col-9 row">
            <div className="col-md-3">
            <img className='w-100' src={book1} alt="book one" />
            <div className=' text-center'>
                <h5 className='BColor'>Simple way of piece life</h5>
                <small>Armor Ramsey</small>
                <p className='OColor'>$ 40.00</p>
            </div>
        </div>
        {/* ----------------------------- */}
          </div>
        </div>
      </div>
    </>
  )
}

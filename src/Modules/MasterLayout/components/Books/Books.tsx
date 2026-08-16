import { useEffect, useState } from 'react'
import book1 from '../../../../assets/books1.png'
import axios from 'axios'
export default function Books() {
  let [books,setBooks]=useState(0);
  let getbooks = async () =>{
    let response = await axios.get('https://upskilling-egypt.com:3007/api/book') as any;
    console.log(response?.data?.data);
    // setBooks(response?.data?.data);
    // let Blist = response.data.data ;
    // console.log(Blist);
    setBooks(1);
  }
  useEffect( ()=>{
    getbooks()
  },[])
  return (
    <>
    <h1>{books}</h1>
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

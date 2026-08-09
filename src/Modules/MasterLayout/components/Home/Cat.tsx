import cat1 from '../../../../assets/cat1.jpg'
import cat2 from '../../../../assets/cat2.jpg'
import cat3 from '../../../../assets/cat3.jpg'
export default function Cat() {
  return (
    <>
      <div className="categoryDiv p-4">
        <h3 className="mb-3">Explore our Top Categories</h3>
        <div className="row">
            <div className="col-md-4 p-1">
                <img className='w-100' src={cat1} alt="category one" />
                <h5 className='mt-2 text-center'>Higher Education</h5>
            </div>
            <div className="col-md-4 p-1">
                <img className='w-100' src={cat2} alt="category two" />
                <h5 className='mt-2 text-center'>Higher Education</h5>
            </div>
            <div className="col-md-4 p-1">
                <img className='w-100' src={cat3} alt="category three" />
                <h5 className='mt-2 text-center'>Higher Education</h5>
            </div>
        </div>
        <div className=' text-center'>
        <button className='purple-button mt-4'>View more</button>
        </div>
      </div>
    </>
  )
}

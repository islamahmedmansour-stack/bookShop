import bookHome from '../../../../assets/bookHome.png'
export default function Hero() {
  return (
    <>
      <div className='homePageDiv d-flex align-items-center'>
        <div className=" container ">
          <div className=" row align-items-center">
            <div className=" col-md-6">
              <h3 style={{ fontSize: '60px', color: '#393280' }} >Our Book Shop</h3>
              <p style={{ fontSize: '25px', color: '#393280' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis dolor nihil unde harum cumque rem laudantium accusamus eaque nisi. Vitae asperiores ea cupiditate rem fuga molestiae minus ducimus quae!</p>
              <button className='py-2 px-3' style={{ background: "transparent", borderColor: '#393280', color: '#393280' }}>READ MORE</button>
            </div>
            <div className=" col-md-6 d-flex justify-content-center " >
              <img src={bookHome} alt="home book" style={{height:'400px'}} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

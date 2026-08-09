export default function ChangePass() {
  return (
    <>
      <p>Welcone back!</p>
    <h5>Change Your Password Easily !</h5>
      <div className=" d-flex flex-column justify-content-between align-items-center">
        <form className=" d-flex flex-column justify-content-between align-items-center">
          <label className=" align-self-start mt-2">Old Password :</label>
          <input  type="password" />
          <label className=" align-self-start mt-2">New Password :</label>
          <input type="password" />
          <button className="orange-button w-100 mt-3">send</button>
        </form>
      </div>
    </>
  )
}

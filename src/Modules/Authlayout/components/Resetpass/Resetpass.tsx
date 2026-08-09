export default function Resetpass() {
  return (
    <>
    <p>Welcone back!</p>
    <h5>Reset Your Password Now !</h5>
      <div className=" d-flex flex-column justify-content-between align-items-center">
        <form className=" d-flex flex-column justify-content-between align-items-center">
          <label className=" align-self-start mt-2">E-mail :</label>
          <input  type="email" />
          <label className=" align-self-start mt-2">OTP :</label>
          <input type="number" />
          <label className=" align-self-start mt-2">Password :</label>
          <input type="password" />
          <button className="orange-button w-100 mt-3">send</button>
        </form>
      </div>
    </>
  )
}

import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <p>Create new account</p>
      <h5>Register</h5>
      <div className="d-flex flex-column justify-content-between">
         <form>
        <div className="row ">
          <div className="col-6">
            <label htmlFor="">First Name:</label>
            <br />
            <input id="firstName" type="text" />
          </div>
          {/* --- */}
          <div className="col-6">
            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input id="lastName" type="text" />
          </div>
        </div>
        {/* ======================== */}
        <div className="w-100 mt-3">
        <label htmlFor="emailReg">E-mail:</label>
        <br />
        <input className="w-100" id="emailReg" type="text" />
        </div>
        {/* ======================== */}
        <div className="w-100 mt-3">
        <label className="me-3" htmlFor="passwordReg">Password:</label>
        <br />
        <input className="w-100" id="passwordReg" type="password" />
        </div>
        {/* ======================== */}
        <label className="mt-3">Role</label>
        <br />
        <select className="w-100">
          <option>Admin</option>
          <option>Client</option>
        </select>
        {/* ======================== */}
        <button className="my-3 py-2 w-100 orange-button">Register</button>
      </form>
        <Link className=" w-100  py-2 text-center text-decoration-none purple-button" to='/login'>Login</Link>
      </div>
    </>
  )
}

export default function Forgetpass() {
  return (
    <>
      <p>Welcome back!</p>
      <h5>Forget Password !!</h5>
      <form className="mt-5">
        <label htmlFor="emailForget">E-mail</label>
        <br />
        <input type="email"  id="emailForget" />
        <br />
        <button className="w-100 mt-4 purple-button">Send</button>
      </form>
    </>
  )
}

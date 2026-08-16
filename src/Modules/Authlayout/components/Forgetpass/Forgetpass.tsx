interface emailform {
  email: string;
}
import axios from "axios";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Forgetpass() {
  // -------------- Use Form  & response & navigate ----------------
  let navigate = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm<emailform>();
  let onsubmit = async (data: emailform) => {
    try {
      let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/forgot-password', data)
      toast.success('OTP has been sent  please check your emai');
      navigate('/resetpass');
    } catch (error) {
      toast.error('User not exist');
    }
  }
  return (
    <>
      <p>Welcome back!</p>
      <h5>Forget Password !!</h5>
      <form onSubmit={handleSubmit(onsubmit)} className="mt-5">
        <label htmlFor="emailForget">E-mail</label>
        <br />
        <input type="email" id="emailForget" {...register('email', { required: 'email is needed' })} />
        {errors.email && <p className="text-danger m-0">{errors.email.message}</p>}
        <button type="submit" className="w-100 mt-4 purple-button">Send</button>
      </form>
    </>
  )
}

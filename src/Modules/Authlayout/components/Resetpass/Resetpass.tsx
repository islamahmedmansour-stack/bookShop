import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface resetForm {
  otp: string;
  email: string;
  password: string;
}
export default function Resetpass() {
     // -------------- Use Form  & response & navigate ----------------
     let navigate = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm<resetForm>();
  let onsubmit = async (data: resetForm) => {
    try {
      let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/reset-password', data);
      console.log(response?.data);
      toast.success('Password changed successfully ');
      navigate('/login');
    } catch (errors) {
      toast.error('failed');
    }
  }
  return (
    <>
      <p>Welcone back!</p>
      <h5>Reset Your Password Now !</h5>
      <div className=" d-flex flex-column justify-content-between align-items-center">
        <form onSubmit={handleSubmit(onsubmit)} className=" d-flex flex-column justify-content-between align-items-center">
          <label className=" align-self-start mt-2">E-mail :</label>
          <input type="email" {...register('email', { required: 'email is required' })} />
          {errors.email && <p className="text-danger m-0 p-0">{errors.email.message}</p>}
          <label className=" align-self-start mt-2">OTP :</label>
          <input type="text" {...register('otp', { required: 'OTP is required' })} />
          {errors.otp && <p className="text-danger m-0 p-0">{errors.otp.message}</p>}
          <label className=" align-self-start mt-2">Password :</label>
          <input type="password" {...register('password', { required: 'password is required ', minLength: { value: 8, message: 'password must be more the 8 characters' } })} />
          {errors.password && <p className="text-danger m-0 p-0">{errors.password.message}</p>}
          <button type="submit" className="orange-button w-100 mt-3">send</button>
        </form>
      </div>
    </>
  )
}

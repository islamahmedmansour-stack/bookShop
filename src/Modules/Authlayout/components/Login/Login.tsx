import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Authcontext } from "../../../../context/Authcontext/Authcontext";
interface loginForm {
    password:string ,
    email:string
}
export default function Login() {
  let{saveUserData}:any = useContext(Authcontext);
   // -------------- Use Form  & response & navigate ----------------
   let navigate = useNavigate();
    let {register,handleSubmit,formState:{errors}}= useForm<loginForm>();
    let onSubmit= async (data:loginForm)=>{
      try{
        let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/login',data);
        toast.success(response?.data?.message);
        localStorage.setItem( 'userToken' , JSON.stringify(response?.data?.data?.accessToken) );
        saveUserData()
        navigate('/dashboard');
      }catch(error){
        toast.error('Login failer');
      }
    }
  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        <p>Welcome back!</p>
        <h5>Login to your accout</h5>
        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-between mt-3 ">
          {/* ********************email********************** */}
          <label htmlFor="emailIn">E-mail</label>
          <input id="emailIn" type="email" {...register('email',{required:'Email is required', minLength:{value:6,message:"Email can't be this short"}})} />
          {errors.email && <p className="text-danger mb-0">{errors.email.message} </p>}
          {/* *******************password******************** */}
          <label className="mt-3" htmlFor="password">Password</label>
          <input id="password" type="password" {...register('password',{required:'Password is needed',minLength:{value:10,message:"password can't be less than 10 characters"}})} />
          {errors.email && <p className="text-danger mb-0" > {errors.password?.message} </p> }
          {/* ******************remember me ***************** */}
          <label className="mt-3">
            <input
              className="mx-2"
              type="checkbox"
              // checked={isChecked}
              // onChange={handleToggle}
              />
            Remember Me
          </label>
          <Link to='/forgetPass'>Forget Password</Link>
              {/* *****************login submit ***************** */}
              <button type="submit" className="mt-3 orange-button py-2 text-white">Login</button>
        </form>
              <Link className="mt-2 py-2 text-center text-decoration-none purple-button " to='/register'>Register</Link>
      </div>
    </>
  )
}

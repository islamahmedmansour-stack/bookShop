import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface registerForm {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  role: string;
}
export default function Register() {
  // -------------- Use Form  & response & navigate ----------------
  let navigate = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm<registerForm>({
    defaultValues:{
      first_name:"",
      last_name:"",
      password:"",
      email:"",
      role:"Customer"
    }
  });
  let onsubmit = async (data: registerForm) => {
    // console.log(data);
    try {
      let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/register', data , {headers:{
        'Content-Type':'application/json'
      }});
      toast.success('Welcome');
      navigate('/login');
      console.log(response?.data);
    } catch (error) {
      toast.error('Try again');
    }
  }
  return (
    <>
      <p>Create new account</p>
      <h5>Register</h5>
      <div className="d-flex flex-column justify-content-between">
        {/* ======================= form =========================================== */}
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="row ">
            <div className="col-6">
              <label htmlFor="firstName">First Name:</label>
              <br />
              <input id="firstName" type="text" {...register('first_name', { required: 'first name is needed' })} />
              {errors.first_name && <p className='text-danger m-0 p-0'>{errors.first_name.message}</p>}
            </div>
            {/* --- */}
            <div className="col-6">
              <label htmlFor="lastName">Last Name:</label>
              <br />
              <input id="lastName" type="text" {...register('last_name', { required: 'last name is needed' })} />
              {errors.last_name && <p className='text-danger m-0 p-0'>{errors.last_name.message}</p>}
            </div>
          </div>
          {/* ======================== */}
          <div className="w-100 mt-3">
            <label htmlFor="emailReg">E-mail:</label>
            <br />
            <input className="w-100" id="emailReg" type="text" {...register('email', { required: 'email is needed' })} />
            {errors.email && <p className='text-danger m-0 p-0'>{errors.email.message}</p>}
          </div>
          {/* ======================== */}
          <div className="w-100 mt-3">
            <label className="me-3" htmlFor="passwordReg">Password:</label>
            <br />
            <input className="w-100" id="passwordReg" type="password" {...register('password', { required: 'password is needed' })} />
            {errors.password && <p className='text-danger m-0 p-0'>{errors.password.message}</p>}
          </div>
          {/* ======================== */}
          <label className="mt-3" htmlFor="role">Role</label>
          <br />
          <select id="role" className="w-100" {...register('role', { required: 'role is needed' })}>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </select>
          {errors.role && <p className='text-danger m-0 p-0'>{errors.role.message}</p>}
          {/* ======================== */}
          <button type="submit" className="my-3 py-2 w-100 orange-button">Register</button>
        </form>
        <Link className=" w-100  py-2 text-center text-decoration-none purple-button" to='/login'>Login</Link>
      </div>
    </>
  )
}

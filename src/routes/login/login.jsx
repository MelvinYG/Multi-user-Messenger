import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import apiRequest from '../../lib/apiRequest';

const Login = () => {

  const [error, setError] = useState("");
  const {updateUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try{
      const res = await apiRequest.post("/auth/login", {
        email,password
      });
      updateUser(res.data);
      navigate('/chats');
    }catch(err){
      setError(err.response.data.message);
    }
  } 

  return (
    <div className='login-container h-[100vh] flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <form className='flex flex-col gap-4' onSubmit={loginHandler}>
            <h2 className='text-center font-semibold'>Welcome Back</h2>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <input type="password" name="password" id="password" placeholder="Password" required/>
            {error && <span>{error}</span>}
            <button className='bg-orange-300 border border-orange-800 p-2 hover:bg-orange-700 transition-all ease-in-out'>
                Login
            </button>
            <Link to={'/signup'}>Dont have an account ? Signup</Link>
        </form>
      </div>
    </div>
  )
};

export default Login;

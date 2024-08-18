import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from "../../context/AuthContext";

const SignUp = () => {

  const [error, setError] = useState("");
  const {updateUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const signUpHandler = async (event) => {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try{
      const res = await apiRequest.post("/auth/signup", {
        username,email,password
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
        <form className='flex flex-col gap-4' onSubmit={signUpHandler}>
            <h2 className='text-center font-semibold'>Get Started</h2>
            <input type="text" name="username" id="username" placeholder="Username" required/>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <input type="password" name="password" id="password" placeholder="Password" required/>
            {error && <span>{error}</span>}
            <button className='bg-orange-300 border border-orange-800 p-2 hover:bg-orange-700 transition-all ease-in-out'>
                Sign Up
            </button>
            <Link to={'/login'}>Already have an account? Login</Link>
        </form>
      </div>
    </div>
  )
};

export default SignUp;

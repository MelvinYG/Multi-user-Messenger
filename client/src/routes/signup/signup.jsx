import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='login-container h-[100vh] flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <form className='flex flex-col gap-4'>
            <h2 className='text-center font-semibold'>Get Started</h2>
            <input type="text" name="username" id="username" placeholder="Username" required/>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            <input type="password" name="password" id="password" placeholder="Password" required/>
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

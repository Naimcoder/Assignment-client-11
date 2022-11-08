
import { Link } from "react-router-dom";
import login from '../../../Images/38435-register.gif'
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { auth, AuthContext } from "../../../Context/UseContext";
import { GithubAuthProvider, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
const Login = () => {
  const [userEmail,setUserEmail]=useState("")
  const{signIn}=useContext(AuthContext)
 const githubProvider= new GithubAuthProvider()
 const googleProvider= new GoogleAuthProvider()
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password)
    signIn(email,password)
    .then((result) => {
      const user = result.user;
      console.log(user)
      toast.success('successfully')
      // ...
    })
    .catch((error) => {
       console.log(error)
    })
  };

  const signInGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
      const user= result.user;
      console.log(user)
      toast.success('successfully Your Google SignIn')
    }).catch(error=>{
      console.error(error)
    })
  }
  const signInGithub=()=>{
    signInWithPopup(auth,githubProvider)
    .then((result)=>{
      const user= result.user;
      console.log(user)
      toast.success('successfully Your Github SignIn')
    }).catch(error=>{
      console.error(error)
    })
  }
  const resetPassword=()=>{
    sendPasswordResetEmail(auth,userEmail)
    .then(()=>{
      toast.success('please Cheak your Email?')
    })
    .catch(error=>{
      console.error(error)
    })
  }
 
  return (
    <div className="lg:flex sm:flex-col py-20 lg:flex-row justify-evenly">
    <div className="">
      <img src={login} alt="" />
    </div>
    <div className="lg:w-1/2 max-w-md p-8 space-y-3 rounded-xl shadow-xl  bg-slate-300 dark:text-gray-100">
        <h1 className="text-2xl font-bold text-center py-2">Login</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-xl dark:text-gray-400">
              Email
            </label>
            <input
            onChange={(e)=>setUserEmail(e.target.value)}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-xl dark:text-gray-400">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
              required
            />
            <div  className="flex justify-end text-lg dark:text-gray-400">
              <button onClick={resetPassword}>Forgot Password?</button>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-violet-400">
            Sign in
          </button>
        </form>
        <div className="text-center">
        <div className=" sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-lg dark:text-gray-400">
            Login with social accounts
          </p>
        </div>
        <div>
    <button onClick={signInGithub} className="flex items-center justify-center w-full p-4 my-5 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  text-white  bg-black focus:ring-violet-400">
			 <span className=" text-2xl"> <FaGithub></FaGithub></span>
			<p>Login with GitHub</p>
		</button>
    <button onClick={signInGoogle}  className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  text-white   bg-blue-600 focus:ring-violet-400">
			 <span className=" text-2xl"><FaGoogle></FaGoogle></span>
			<p>Login with Google</p>
		</button>
        </div>
        <p className="text-lg text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link to="/register" className="underline dark:text-gray-100">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

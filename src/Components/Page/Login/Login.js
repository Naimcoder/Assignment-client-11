import { useState } from "react";
import { Link } from "react-router-dom";
import login from '../../../Images/38435-register.gif'
import { FaGithub, FaGoogle } from "react-icons/fa";
const Login = () => {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handlechange = (event) => {
    const value = event.target.value;
    const fuild = event.target.name;
    const newUser = { ...user };
    newUser[fuild] = value;
    setUser(newUser);
  };
  return (
    <div className="flex py-20  justify-evenly">
    <div className="w-1/2">
      <img src={login} alt="" />
    </div>
    <div className="w-1/2 max-w-md p-8 space-y-3 rounded-xl shadow-xl bg-amber-100 dark:text-gray-100">
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
            onBlur={handlechange}
              type="email"
              name="email"
              placeholder="Username"
              className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-xl dark:text-gray-400">
              Password
            </label>
            <input
            onBlur={handlechange}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <div className="flex justify-end text-lg dark:text-gray-400">
              <Link to="">Forgot Password?</Link>
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
    <button  className="flex items-center justify-center w-full p-4 my-5 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  text-white  bg-black focus:ring-violet-400">
			 <span className=" text-2xl"> <FaGithub></FaGithub></span>
			<p>Login with GitHub</p>
		</button>
    <button  className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  text-white   bg-blue-600 focus:ring-violet-400">
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

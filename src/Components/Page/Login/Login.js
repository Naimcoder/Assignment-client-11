import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    fetch("http://localhost:5000/users", {
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
    <form className="py-10 bg-slate-400" onSubmit={handleSubmit}>
      <input
        className="my-5"
        onBlur={handlechange}
        type="email"
        name="email"
        placeholder="Email"
      />{" "}
      <br />
      <input
        className="my-5"
        onBlur={handlechange}
        type="text"
        name="address"
        placeholder="Address"
      />{" "}
      <br />
      <input onBlur={handlechange} type="text" placeholder="Img" name="img" />
      <br />
      <button className="btn bg-red-500">Add User</button>
    </form>
  );
};

export default Login;

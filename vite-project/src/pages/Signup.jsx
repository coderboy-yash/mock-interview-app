import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import sign from "../assets/signup.png";
// import Axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_REACT_APP_BASE_URL);
    if (name == "" && email == "" && password == "") {
      toast.error("please enter info then submit");
      // return;
    }
    if (name === "") toast.error("name cannot be empty! ");
    if (password.length < 4) {
      if (password == "") toast.error("password cannot be empty");
      else toast.error("password should contain atleast 4 characters");
    }
    if (email === "") toast.error("email cannot be empty! ");
    else toast.success("registered successfully");
    // Axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/api/auth/register`, {
    //   username: name,
    //   email,
    //   password,
    // })
    //   .then((response) => {
    //     console.log(response.status);
    //     if (response.status == 200) {
    //       navigate("/login");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.response.status);
    //     if (error.response.status == 500)
    //       toast.error("user already present better with the login button");
    //   });
  };
  return (
    <div className=" h-screen p-20 bg-gradient-to-r from-violet-100 to-purple-300 ">
      <Toaster></Toaster>
      <div className="flex border-2 w-[80%]  m-10 shadow-gray-600 shadow-lg bg-gradient-to-r from-violet-100 to-purple-500   ">
        <div className="basis-1/2 ">
          <img className="h-full" src={sign} alt="" />
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col basis-1/2 justify-center items-center gap-8   m-10"
        >
          <h1 className="text-6xl font-bold text-white">Sign up Here</h1>
          <input
            className="p-4 border-2 border-purple-500 outline-purple-700 text-xl"
            type="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="p-4 border-2 border-purple-500 outline-purple-700 text-xl"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="p-4 border-2 border-purple-500 outline-purple-700 text-xl"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-purple-700 p-4 text-white w-1/2 text-3xl"
            type="submit"
          >
            Submit
          </button>
          <button className="text-white text-xl" onClick={(e) => login(e)}>
            registered user &rarr; login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

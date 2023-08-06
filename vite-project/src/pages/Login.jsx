import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import sign from "../assets/login.jpg";
// import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase-config";
const Login = () => {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const login = (e) => {
    e.preventDefault();
    // navigate("/signup");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_REACT_APP_BASE_URL);
    if (email == "" || password == "") {
      return toast.error("values cannot be empty");
      // return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        toast.success("login successfull");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("invalid credentials");
      });
  };
  return (
    <div className="  px-20 py-5 bg-gradient-to-r from-violet-100 to-blue-300 ">
      <Toaster></Toaster>
      <div className="rounded-3xl flex border-2 w-[80%]  m-10 shadow-gray-600 shadow-lg bg-gradient-to-r from-violet-100 to-blue-500   ">
        <div className="basis-1/2  ">
          <img className="h-full rounded-l-2xl" src={sign} alt="" />
        </div>
        <form
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col basis-1/2 justify-center items-center gap-4   m-10"
        >
          <h1 className="text-6xl font-bold mb-4 text-white">Log in Here</h1>

          <input
            className="p-3 border-2 border-purple-500 outline-purple-700 text-xl"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="p-3 border-2 border-purple-500 outline-purple-700 text-xl"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-700 p-4 text-white w-1/2 text-3xl"
            type="submit"
          >
            Submit
          </button>
          <button className="text-white text-xl" onClick={(e) => login(e)}>
            new user &rarr; Signup here
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

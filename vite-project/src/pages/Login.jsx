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
      navigate("/")
      })
      .catch((error) => {
        console.log(error);
        toast.error("invalid credentials")
      });
    // Axios.post(
    //   `${import.meta.env.VITE_REACT_APP_BASE_URL}/user/login`,
    //   {
    //     email,
    //     password,
    //   },
    //   {
    //     withCredentials: true,
    //   }
    // )
    //   .then((response) => {
    //     console.log(response.status);
    //     if (response.status == 200) {
    //       toast.success("login successful");
    //       navigate("/");
    //     }
    //     if (response.status == 201) {
    //       toast.error("invalid credentials");
    //     }
    //     if (response.status == 500) {
    //       toast.error("server error");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.response.status);
    //     if (error.response.status == 500) toast.error("internal error");
    //   });
  };
  return (
    <div className=" h-screen p-20 bg-gradient-to-r from-violet-100 to-blue-300 ">
      <Toaster></Toaster>
      <div className="rounded-3xl flex border-2 w-[80%]  m-10 shadow-gray-600 shadow-lg bg-gradient-to-r from-violet-100 to-blue-500   ">
        <div className="basis-1/2  ">
          <img className="h-full rounded-l-2xl" src={sign} alt="" />
        </div>
        <form
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col basis-1/2 justify-center items-center gap-8   m-10"
        >
          <h1 className="text-6xl font-bold text-white">Log in Here</h1>

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

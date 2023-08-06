import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import sign from "../assets/signup.png";
// import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase-config";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    // console.log("e", e.target.name);
    value = e.target.value;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };
  //

  //**************************************** */
  const login = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(import.meta.env.VITE_REACT_APP_BASE_URL);
    if (user.name == "" || user.email == "" || user.password == "") {
      return toast.error("please enter info then submit");
      // return;
    }

    if (user.password.length < 6) {
      return toast.error("password should contain atleast 6 characters");
    }

    // ***********
    createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
      .then((userCredentials) => {
        console.log(userCredentials);
        if (userCredentials) {
          toast.success("user created successfully");
          navigate("/");
        } else toast.error("unable to register");
      })
      .catch((error) => {
        toast.error("user already present");
        console.log(error);
      });
    // Axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/user/register`, {
    //   username: user.name,
    //   email: user.email,
    //   password: user.password,
    // })
    //   .then((response) => {
    //     console.log(response.status);
    //     if (response.status == 200) {
    //       navigate("/");
    //     }
    //     if (response.status == 403) {
    //       console.log(response);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error.response.status);
    //     if (error.response.status == 500) console.log(error);
    //     // toast.error("user already present better with the login button");
    //   });
  };
  return (
    <div className="  px-20 py-5 bg-gradient-to-r from-violet-100 to-purple-300   ">
      <Toaster></Toaster>
      <div className="flex rounded-3xl border-2 w-[80%]  m-10 shadow-gray-600 shadow-lg bg-gradient-to-r from-violet-100 to-purple-500  ">
        <div className="basis-1/2 ">
          <img className="h-full rounded-l-2xl" src={sign} alt="" />
        </div>
        <form
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col basis-1/2 justify-center items-center gap-4   m-6"
        >
          <h1 className="text-6xl font-bold mb-4 text-white">Sign up Here</h1>
          <input
            className="p-2 border-2 border-purple-500 outline-purple-700 text-xl"
            type="name"
            name="name"
            placeholder="name"
            onChange={(e) => handleInput(e)}
            value={user.name}
          />
          <input
            className="p-2 border-2 border-purple-500 outline-purple-700 text-xl"
            type="email"
            name="email"
            placeholder="email"
            value={user.email}
            onChange={handleInput}
          />
          <input
            className="p-2 border-2 border-purple-500 outline-purple-700 text-xl"
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={handleInput}
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

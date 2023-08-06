import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase-config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Interviewee from "./pages/Interviewee";
import Interviewer from "./pages/Interviewer";
import Room from "./pages/Room";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import MyContext from "./context";
// import axios from "axios";
// import Footer from "./components/Footer";

function App() {
  const [authUser, setAuthUser] = useState(null);
  // const [username, setUsername] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user exist", user);
        //    axios.get(`${import.meta.env.VITE_REACT_APP_BASE_URL}/user/getuser`, { params: { email: user.email } }).then((res) => {
        //       console.log(res);
        //       setUsername(res.data);
        //       // setAuthUser(res)

        // })

        setAuthUser(user);
      } else console.log("user not found");
    });
    return () => {
      listen();
    };
  }, []);
  return (
    <MyContext.Provider
      value={{
        email: authUser ? authUser.email : "",
        token: authUser ? authUser.accessToken : "",
      }}
    >
      <div className="relative overflow-hidden">
        <BrowserRouter>
          <Navbar setAuthUser={setAuthUser} authUser={authUser}></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route
              path="/interviewee"
              element={authUser ? <Interviewee></Interviewee> : <Login></Login>}
            ></Route>
            <Route
              path="/interviewer"
              element={authUser ? <Interviewer></Interviewer> : <Login></Login>}
            ></Route>
            <Route path="/room" element={<Room></Room>}></Route>
          </Routes>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;

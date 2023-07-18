import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Interviewee from "./pages/Interviewee";
import Interviewer from "./pages/Interviewer";
import Room from "./pages/Room";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-hidden">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route
            path="/interviewee"
            element={<Interviewee></Interviewee>}
          ></Route>
          <Route
            path="/interviewer"
            element={<Interviewer></Interviewer>}
          ></Route>
          <Route path="/room" element={<Room></Room>}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

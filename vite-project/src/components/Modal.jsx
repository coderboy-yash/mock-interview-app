import { useContext, useState } from "react";
import MyContext from "./../context";
import Axios from "axios";

const Modal = ({ isVisible, onClose, role }) => {
  const contextData = useContext(MyContext);
  const [interviewType, setInterviewType] = useState("Programming DS/Alog");
  const [rating, setRating] = useState("Beginner");
  const [selectedDate, setSelectedDate] = useState("");
  // const [profession, setProfession] = useState("");

  //
  const [selectedTime, setSelectedTime] = useState([]);
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    console.log(isChecked, value);

    if (isChecked) {
      setSelectedTime([...selectedTime, value]);
      console.log(selectedTime);
    } else {
      setSelectedTime(selectedTime.filter((item) => item !== value));
      console.log(selectedTime);
    }
  };

  //

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
    // Handle form submission logic here, e.g., send data to server
    const formData = {
      email: contextData.email,
      uid: contextData.uid,
      interviewType,
      rating,
      selectedDate,
      selectedTime,
      role,
    };
    console.log(formData);
    Axios.post(`${import.meta.env.VITE_REACT_APP_BASE_URL}/user/schedule`, {
      formData,
    })
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          console.log("interview scheduled successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // Assuming you want to close the form after submission
  };
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center ">
      <div className="   flex flex-col overflow-auto">
        <button
          className="text-lg bg-black text-white flex justify-end p-4 "
          onClick={() => onClose()}
        >
          X
        </button>

        <div className="bg-white p-2 rounded  overflow-auto">
          <h1 className="flex justify-center text-3xl">schedule interview</h1>{" "}
          <form
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col justify-center  bg-white gap-10 m-8  rounded-lg "
          >
            <div className="justify-center flex flex-col gap-4 text-2xl">
              <label className="text-2xl  ">
                Select Mock Interview Type
                <select
                  value={interviewType}
                  onChange={(e) => setInterviewType(e.target.value)}
                >
                  <option value="Programming DS/Algo">
                    Programming DS/Alog
                  </option>
                  <option value="Frontend web development">
                    Frontend web development
                  </option>
                  <option value="backend web development">
                    Frontend web development
                  </option>
                  <option value="Full stack web development">
                    Full stack web development
                  </option>
                  <option value="Cloud computing / devops">
                    Cloud computing / devops
                  </option>
                  <option value="Machine Learning">Machine Learning</option>
                  <option value="Blockchain">Blockchain</option>
                </select>
              </label>
              <label className="text-2xl">
                Rate your coding skills
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">intermediate</option>
                  <option value="experienced">experienced</option>
                </select>
                .
              </label>
              <label className="text-2xl">
                select date
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  required
                />
              </label>
            </div>
            <span className="text-2xl">Select atleast one time</span>
            <label className="grid grid-rows-4 grid-flow-col gap-3 text-xl">
              <div>
                <input
                  type="checkbox"
                  value="12:00 pm-1:00 pm"
                  checked={selectedTime.includes("12:00 pm-1:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span className=""> 12:00 pm-1:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="1:00 pm-2:00 pm"
                  checked={selectedTime.includes("1:00 pm-2:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 1:00 pm-2:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="2:00 pm -3:00 pm"
                  checked={selectedTime.includes("2:00 pm -3:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 2:00 pm -3:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="3:00 pm-4:00 pm"
                  checked={selectedTime.includes("3:00 pm-4:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 3:00 pm-4:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="4:00 pm-5:00 pm"
                  checked={selectedTime.includes("4:00 pm-5:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 4:00 pm-5:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="5:00 pm-6:00 pm"
                  checked={selectedTime.includes("5:00 pm-6:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 5:00 pm-6:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="6:00 pm-7:00 pm"
                  checked={selectedTime.includes("6:00 pm-7:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 6:00 pm-7:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="7:00 pm-8:00 pm"
                  checked={selectedTime.includes("7:00 pm-8:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 7:00 pm-8:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="8:00 pm-9:00 pm"
                  checked={selectedTime.includes("8:00 pm-9:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 8:00 pm-9:00 pm</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  value="9:00 pm-10:00 pm"
                  checked={selectedTime.includes("9:00 pm-10:00 pm")}
                  onChange={handleCheckboxChange}
                />
                <span> 9:00 pm-10:00 pm</span>
              </div>
            </label>
            <button
              className="p-2 outline-orange-300 border-orange-900 border-2 w-60 bg-amber-900 text-white hover:bg-amber-600 active:bg-amber-800"
              type="submit"
              // onClick={() => onClose()}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

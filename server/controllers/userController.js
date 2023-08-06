import User from "../models/User.js";
import Schedule from "../models/Schedule.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    console.log(1);

    const newUser = new User({
      username: req.body.username.trim(),
      email: req.body.email.trim(),
      password: hash,
    });
    await newUser.save();
    console.log(2);
    res.status(200).send("user has been created successfully");
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
// export const getUser = async (req, res) => {
//   console.log(req.params);
//   const user = await User.findOne({
//     email: req.params.email,
//   });
//   if (user) {
//     res.send(user.username);
//   }
//   // res.send("hello from server");
// };
export const schedule = async (req, res, next) => {
  const roomId = Math.floor(Math.random() * 100000 + 100000);
  const form = req.body.formData;
  form.status = "unmatched";

  if (form.role == "interviewee") {
    const schedule = await Schedule.findOne({
      email: form.email,
      selectedDate: form.selectedDate,
      role: "interviewee",
    });
    console.log(schedule);
    if (schedule) {
      console.log("not allowed to schedule again on the same date");
      return res.status(401).send("please select another date ");
    }
  } else {
    const schedule = await Schedule.findOne({
      email: form.email,
      selectedDate: form.selectedDate,
      role: "interviewer",
    });
    console.log(schedule);
    if (schedule) {
      console.log("not allowed to schedule on the same date");
      return res.status(401).send("please select another date ");
    }
  }
  let matchedTime = [];
  if (form.role == "interviewer") {
    const matchedSchedule = await Schedule.findOne({
      selectedDate: form.selectedDate,
      interviewType: form.interviewType,
      role: "interviewee",
      status: "unmatched"
    });
    if (matchedSchedule) {
      matchedTime = matchedSchedule.selectedTime.filter((value) =>
        form.selectedTime.includes(value)
      );
      console.log("matchedTime", matchedTime);
      if (matchedTime.length > 0) {
        form.interviewee = matchedSchedule.email;
        form.matchedTime = matchedTime[0];
        form.status = "matched";
        form.roomId = roomId;
        const updated = await Schedule.findOneAndUpdate({
          selectedDate: form.selectedDate,
          interviewType: form.interviewType,
          role: "interviewee",
        }, { status: "matched", matchedTime: matchedTime[0], interviewer: form.email, roomId: roomId });
      }

    }
  }
  if (form.role == "interviewee") {
    const matchedSchedule = await Schedule.findOne({
      selectedDate: form.selectedDate,
      interviewType: form.interviewType,
      role: "interviewer",
      status: "unmatched"
    });
    if (matchedSchedule) {
      matchedTime = matchedSchedule.selectedTime.filter((value) =>
        form.selectedTime.includes(value)
      );
      console.log("matchedTime", matchedTime[0]);
      if (matchedTime.length > 0) {

        form.interviewer = matchedSchedule.email;
        form.matchedTime = matchedTime[0];
        form.status = "matched";
        form.roomId = roomId;
        const updated = await Schedule.findOneAndUpdate({
          selectedDate: form.selectedDate,
          interviewType: form.interviewType,
          role: "interviewer",
        }, { status: "matched", matchedTime: matchedTime[0], interviewee: form.email, roomId: roomId });
      }

    }
  }

  const newSchedule = new Schedule(form);

  await newSchedule.save();

  if (form.role == "interviewer") {
    console.log("interviewer", form);
  }
  if (form.role == "interviewee") {
    console.log("interviewee", form);
  }
};

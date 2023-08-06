import User from "../models/User.js";
import Schedule from "../models/Schedule.js";
export const getData = async (req, res, next) => {
    const role = req.query.role;
    const token = req.query.token;
    // console.log(role, token)
    const data = await Schedule.find({
        token: token,
        role: role,


    })
    // console.log(data);
    const filteredData = data.map(item => {
        return {

            interviewType: item.interviewType,
            rating: item.rating,
            selectedDate: item.selectedDate,
            status: item.status,
            matchedTime: item.matchedTime ? item.matchedTime : "not matched"

        };
    });
    console.log(filteredData)

    res.send("hello");

}
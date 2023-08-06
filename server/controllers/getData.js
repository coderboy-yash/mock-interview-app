import User from "../models/User.js";
import Schedule from "../models/Schedule.js";
export const getData = async (req, res, next) => {
    const role = req.query.role;
    const uid = req.query.uid;
    console.log(role, uid)

    const data = await Schedule.find({
        uid: uid,
        role: role,


    })
    console.log(data, "data");
    const filteredData = data.map(item => {
        return {
            role: role,
            interviewType: item.interviewType,
            rating: item.rating,
            selectedDate: item.selectedDate,
            status: item.status,
            matchedTime: item.matchedTime ? item.matchedTime : "not matched",
            roomId: item.roomId ? item.roomId : "not available",

        };
    });
    console.log(filteredData)

    res.status(200).send(filteredData);

}
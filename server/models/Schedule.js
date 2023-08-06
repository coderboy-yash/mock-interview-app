import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    email: {
        type: 'string',


    }, interviewType: {
        type: 'string',
    },
    rating: {
        type: "string",

    }
    , selectedDate: {
        type: "string",

    }, selectedTime: {
        type: "array",
    },
    status: {
        type: "string",
    }
    , role: {
        type: "string",
    }, matchedTime: {
        type: "string",
    }, interviewee: {
        type: "string",

    }, interviewer: {
        type: "string",
    }, uid: {
        type: "string",
    }, roomId: {
        type: "string",
    }


});
export default mongoose.model("schedule", scheduleSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// First Create Route, then only need copy this route and add it to calendar with some characteristics.
const CalendarModel = new Schema(
    {
        leader: { type: Schema.Types.ObjectId, ref: "User" },
        routeID: { type: Schema.Types.ObjectId, ref: "Routes" },
        title: String,
        description: String,
        private: { type: Boolean, default: false },
        password: String,
        location: String,
        date: Date,
        startHour: Number,
        startDirection: String,
        duration: Number,
        distance: Number,
        level: String,
        difficulty: String,
        license: String,
        // Style: offRoad, tranquilo, turismo, enduro, curvas suave, curvas fuerte...
        style: [{ type: String }],
        // custom styles
        tags: [{ type: String }],
        motoTypes: [{ type: String }],
        min_power: String,
        max_power: String,
        max_participants: String,
        participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
        url_share_calendar: String,
        images: { type: Array },
        comments: { type: Schema.Types.ObjectId, ref: "Comments" },
        numberOfVisited: Number,
        stops: [{ type: Schema.Types.ObjectId, ref: "StopsPoints" }],
        localRecommended: [{ type: Schema.Types.ObjectId, ref: "LocalPoints" }],

    },
    {
        timestamps: true,
    }
);
const Calendar = mongoose.model("Calendar", CalendarModel);
module.exports = Calendar;
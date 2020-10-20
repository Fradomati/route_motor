const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// First Create Route, then only need copy this route and add it to calendar with some characteristics.
const CalendarModel = new Schema(
    {
        leader: { type: Schema.Types.ObjectId, ref: "User" },
        routeID: { type: Schema.Types.ObjectId, ref: "Routes" },
        title:,
        description:,
        private:,
        password:,
        location:,
        date:,
        startHour:,
        startDirection:,
        duration:,
        distance:,
        level:,
        license:,
        // Style: offRoad, tranquilo, turismo, enduro, curvas suave, curvas fuerte...
        style:,
        // custom styles
        tags:,
        motoTypes:,
        min_power:,
        max_power:,
        max_participants:,
        participants:,
        url_share_calendar:,
        images:,
        comments:,
        numberOfVisited:,
        stops:,
        localRecommended:,

    },
    {
        timestamps: true,
    }
);
const Calendar = mongoose.model("Calendar", CalendarModel);
module.exports = Calendar;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// First Create Route, then only need copy this route and add it to calendar with some characteristics.
const RoutesModel = new Schema(
    {
        creator: { type: Schema.Types.ObjectId, ref: "User" },
        title: String,
        description: String,
        private: { type: Boolean, default: false },
        location: String,
        startDirection: String,
        duration: Number,
        distance: Number,
        level: String,
        // Style: offRoad, tranquilo, turismo, enduro, curvas suave, curvas fuerte...
        recommended_style: [{ type: String }],
        // custom styles
        recommended_tags: [{ type: String }],
        recommended_motoTypes: [{ type: String }],
        recommended_min_power: String,
        recommended_max_power: String,
        url_share_route: String,
        images: { type: Array },
        googleMaps_url_route: String,
        appleMaps_url_route: String,
        other_url_route: String,
        comments: { type: Schema.Types.ObjectId, ref: "Comments" },
        ratings:,
        numberOfVisited:,
        numberOfRoutesDone:,
        stopsRecommended:,
        localsRecommended:,

    },
    {
        timestamps: true,
    }
);
const Router = mongoose.model("Routes", RoutesModel);
module.exports = Router;

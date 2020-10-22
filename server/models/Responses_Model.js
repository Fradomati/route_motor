const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// First Create Route, then only need copy this route and add it to calendar with some characteristics.
const ResponseModel = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User" },
        commentRespond: { type: Schema.Types.ObjectId, ref: "Comments" },
        comment: String,
        date: Date,
    },
    {
        timestamps: true,
    }
);
const Response = mongoose.model("Responses", ResponseModel);
module.exports = Response;
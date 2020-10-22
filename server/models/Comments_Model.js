const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// First Create Route, then only need copy this route and add it to calendar with some characteristics.
const CommentModel = new Schema(
    {
        author: { type: Schema.Types.ObjectId, ref: "User" },
        comment: String,
        date: Date,
        response: [{ type: Schema.Types.ObjectId, ref: "Response" }]
    },
    {
        timestamps: true,
    }
);
const Comments = mongoose.model("Comments", CommentModel);
module.exports = Comments;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema(
    {
        username: String,
        password: String,
        email: String,
        edad: Number,
        located: String,
        language: String,
        experience: Number,
        brand: String,
        model: String,
        power: String,
        interests: [{ type: String }],
        ownRoutes: [{ type: Schema.Types.ObjectId, ref: "Routes" }],
        favRoutes: [{ type: Schema.Types.ObjectId, ref: "Routes" }],
        selectRoutes: [{ type: Schema.Types.ObjectId, ref: "Routes" }],
        doneRoutes: [{ type: Schema.Types.ObjectId, ref: "Routes" }],
        friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", UserModel);
module.exports = User;

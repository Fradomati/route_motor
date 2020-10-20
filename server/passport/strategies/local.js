const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User_Model");
const { hashPassword, checkHashed } = require("../../lib/hashing.js");

passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
        try {
            const foundUser = await User.findOne({ email });
            if (foundUser) {
                checkHashed(password, foundUser.password)
                    ? done(null, foundUser)
                    : done(null, false);
            } else {
                done(null, false);
            }
        } catch (error) {
            console.log("Error Local Strategy", error);
            done(error);
        }
    })
);
console.log("Installed Passport Local Strategy");
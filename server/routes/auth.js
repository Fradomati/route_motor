const express = require("express");
const router = express.Router();
const User = require("../models/User_Model");
const passport = require("passport");
const _ = require("lodash");
const { hashPassword } = require("../lib/hashing")


router.post("/login", (req, res) => {
    passport.authenticate("local", (err, user, failureDetails) => {
        if (err) {
            console.log("err:", err);
            return res.json({ status: 417, message: "El email o la contraseña son incorrectos" });
        }
        if (!user) {
            return res.json({ status: 417, message: "El email o la contraseña son incorrectos" });
        }
        req.login(user, (err) => {
            if (err) {
                return res.status(500).json({ status: "Sesión mal guardada" });
            }
            return res.json(req.user);
        });
    })(req, res)
});

router.post("/signup", async (req, res) => {
    const { email, username, password } = req.body;

    // Check if user is created

    const existUser = await User.findOne({ email });

    if (!existUser) {
        const newUser = await User.create({
            email,
            username,
            password: hashPassword(password),
        });
        // SEND WELCOME EMAIL
        // sendEmail(email, "welcome")

        console.log("Register", username, "done")
        res.json({ status: 200, message: `${username} register` })
        // req.logIn(newUser, (err) => {
        //     res.json(
        //         _.pick(req.user, ["username", "_id", "createdAt", "updatedAt"])
        //     );
        // });
    } else {
        res.json({ status: 417, message: `Ya existe este usuario` });
    }
});

router.post("/forgotPassWord", async (req, res) => {
    const { email } = req.body
    const existUser = await User.findOne({ email });

    if (!existUser) {
        res.json({ status: 417, message: `Este usuario no existe` })
    } else {
        const newPassWord = passWordGenerator()
        const id = existUser._id
        await User.findByIdAndUpdate(
            { _id: id },
            { $set: { password: hashPassword(newPassWord) } }
        )

        // sendEmail(email, "forgot", newPassWord)

        res.json({ status: 200, message: `Enviamos nueva contraseña ${newPassWord}` })
    }
})


router.post("/modifyProfile", async (req, res) => {
    const { id } = req.body
    const { username, email, password } = req.body
    if (username != null) {
        await User.findByIdAndUpdate(
            { _id: id },
            { $set: { username: username } }
        )

    }
    if (email != null) {
        await User.findByIdAndUpdate(
            { _id: id },
            { $set: { email: email } }
        )

    }
    if (password != null) {
        await User.findByIdAndUpdate(
            { _id: id },
            { $set: { password: hashPassword(password) } }
        )
    }

    const changes = await User.findById(id)

    res.json(_.pick(changes, [
        "_id",
        "username",
        "password",
        "email",
        "totalTimes",
        "lastTime",
        "days",
        "hours",
        "refContent",
        "storeContent",
        "likesContent"
    ]))

})

router.post("/completeProfile", (req, res) => {
    // Data necessary to have a complete profile like a "Bike", "Location", etc

})

router.get("/whoame", (req, res) => {
    console.log("Hola", req.isAuthenticated())
    if (req.isAuthenticated()) {
        return res.json(req.user);
    } else {
        return res.status(403).json({ status: "No user session found" });
    }
});

router.post("/logout", async (req, res) => {
    if (req.user) {
        console.log(req.user);
        req.logout();
        return res.json({ status: "Logout OK" });
    } else {
        res.status(401).json({ status: "You are not logged" });
    }
});


module.exports = router;
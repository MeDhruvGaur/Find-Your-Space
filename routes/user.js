const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

//Signupform
router.get("/signup", userController.renderSignupForm);

// Signup page
router.post("/signup",
    wrapAsync(userController.signup));

// Login

router.get("/login", userController.renderLoginForm);

// Login Form
router.post("/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: '/login',
        failureFlash: true
    }),
    userController.login
);

// Logout User
router.get("/logout", userController.logout);


module.exports = router;

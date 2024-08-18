const express = require("express");
const router = express.Router();
const Yup = require("yup");
const { validateFormLogin, validateFormSignup } = require("../controllers/validateForm");

const formSchema = Yup.object({
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
});

router.post("/login", (req,res) => {
    validateFormLogin(req,res)
});

router.post("/signup", (req,res) => {
    validateFormSignup(req,res)
});

module.exports = router;
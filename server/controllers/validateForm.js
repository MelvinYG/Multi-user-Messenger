const Yup = require("yup");

const formSchemaLogin = Yup.object({
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
});

const formSchemaSignup = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
});

const validateFormLogin = (req, res) => {
    const formData = req.body;
    formSchemaLogin.validate(formData)
        .catch(err => {
            res.status(422).send();
            console.log(err.errors);
        })
        .then(valid => {
            if(valid){
                console.log("Form is good");
            }
        });
}

const validateFormSignup = (req, res) => {
    const formData = req.body;
    formSchemaSignup.validate(formData)
        .catch(err => {
            res.status(422).send();
            console.log(err.errors);
        })
        .then(valid => {
            if(valid){
                console.log("Form is good");
            }
        });
}

module.exports = {
    validateFormLogin,
    validateFormSignup
};
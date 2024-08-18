import Yup from 'yup';

const formSchemaLogin = Yup.object({
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
});

const formSchemaSignup = Yup.object({
    username: Yup.string().required("Username required"),
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
});

export const validateFormLogin = async (req, res) => {
    const formData = req.body;
    try {
        await formSchemaLogin.validate(formData);
        console.log("Form is good");
        return true;
    } catch (err) {
        res.status(422).send({ errors: err.errors });
        console.log(err.errors);
        return false;
    }
}

export const validateFormSignup = async (req, res) => {
    const formData = req.body;
    try {
        await formSchemaSignup.validate(formData);
        console.log("Form is good");
        return true;
    } catch (err) {
        res.status(422).send({ errors: err.errors });
        console.log(err.errors);
        return false;
    }
}

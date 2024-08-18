import express from "express"; 
import Yup from "yup";
import { validateFormLogin, validateFormSignup } from "../controllers/validateForm.js";
import { db } from "../drizzle/db.js";
import bcrypt from "bcrypt";
import { users } from "../drizzle/schema.js";
import "dotenv/config";
import { eq } from "drizzle-orm";
const router = express.Router();

const formSchema = Yup.object({
    email: Yup.string().required("Email required"),
    password: Yup.string().required("Password required")
});
router.post("/login", async (req, res) => {
    if (await validateFormLogin(req, res)) {
        console.log("login req");
        try {
            const user = await db.select().from(users).where(eq(users.email, req.body.email));
            if(user.length > 0){
                const orgUser = user[0];
                const orgPass = orgUser.password;
                const isSamePass = await bcrypt.compare(req.body.password, orgPass);
                if(isSamePass){
                    req.session.user = {
                        username: req.body.username,
                        id: orgUser.id,
                    }
                    res.json({ loggedIn: true, status: "Login successful" });
                } else {
                    res.json({ loggedIn: false, status: "Wrong username or password" });
                }
            } else {
                res.json({ loggedIn: false, status: "Wrong username or password" });
            }
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

router.post("/signup", async (req, res) => {
    if (await validateFormSignup(req, res)) {
        console.log("signup req");
        try {
            console.log("trying1");
            const existingUser = await db.select().from(users).where(eq(users.username, req.body.username));
            
            console.log("trying2");

            if (existingUser.length === 0) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const newUserQuery = await db.insert(users).values({
                    username: req.body.username,
                    email: req.body.email,
                    password: hashedPassword,
                });
                console.log("new user here");
                req.session.user = {
                    username: req.body.username,
                    id: newUserQuery[0].id,
                }
                res.json({ loggedIn: true, username: req.body.username });
            } else {
                console.log("old user again");
                res.json({ loggedIn: false, status: "Username exists" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
});

export default router;
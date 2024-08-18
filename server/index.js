import express from 'express';
import { Server } from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import authRouter from './router/authRouter.js';
import session from 'express-session';
import 'dotenv/config';
import http from 'http';
import { checkDbConnection } from './drizzle/db.js';

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: "http://localhost:5173",
        credentials: true
    }
});

checkDbConnection();

app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(session({
    secret: process.env.COOKIE_SECRET,
    credentials: true,
    name: "sid",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.ENVIRONMENT === "production",
        httpOnly: true,
        sameSite:  process.env.ENVIRONMENT === "production" ?  "none" : "lax",
    }
}))

app.use("/auth", authRouter);

app.get("/" , (req, res) => {
    res.json("working fine");
});

io.on("connect", socket => {});

const port = 8080;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
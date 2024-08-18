const express = require("express");
const {Server} = require("socket.io");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const authRouter = require('./router/authRouter.js');

const server = require("http").createServer(app);
const io = new Server(server,{
    cors:{
        origin: "http://localhost:5173",
        credentials: true
    }
});

app.use(helmet());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());

app.use("/auth", authRouter);

app.get("/" , (req, res) => {
    res.json("working fine");
});

io.on("connect", socket => {});

const port = 8080;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectDB from "./config/db.js"
import cookieParser from 'cookie-parser'
import protectRoute from "./middleware/protectRoute.js"
import {app, server} from "./socket/socket.js"
import cors from "cors"
import path from "path"

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


dotenv.config({ path: "../.env" });


app.use(express.json());
app.use(cookieParser())

if (process.env.NODE_ENV !== "production") {
        app.use(cors({
        origin: "http://localhost:3000",
        credentials: true,
    }))
}


app.use("/api/auth", authRoutes)
app.use("/api/messages", protectRoute, messageRoutes)
app.use("/api/users", protectRoute, userRoutes)


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend","dist","index.html"))
    })
}

connectDB().then( () => {
    server.listen(PORT, () => {
        console.log(`App started listening on PORT ${PORT}`);
    })
})

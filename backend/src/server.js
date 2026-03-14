import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectDB from "./config/db.js"
import cookieParser from 'cookie-parser'
import protectRoute from "./middleware/protectRoute.js"

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config()


app.use(express.json());
app.use(cookieParser())

// app.get("/", (req, res) => {
//     return res.send("hey")
// })

app.use("/api/auth", authRoutes)
app.use("/api/messages", protectRoute, messageRoutes)
app.use("/api/users", protectRoute, userRoutes)




connectDB().then( () => {
    app.listen(PORT, () => {
        console.log(`App started listening on PORT ${PORT}`);
    })
})

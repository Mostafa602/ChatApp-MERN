import generateTokenAndSetCookie from "../../utils/generateToken.js";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"


export const signup = async (req, res) => {
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password != confirmPassword) {
            return res.status(400).json({message: "Passwords doesn't match"});
        }

        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({message: "User Already Exists"});
        }

        // HASH the password
        const salt = await bcrypt.genSalt(10); // Generate the salt with 

        const hashedPassword = await bcrypt.hash(password, salt);

        const profilePic = `https://i.pravatar.cc/250?u=mail@${username}.co.uk`

        const newUser = new User({fullName, username, hashedPassword, password: hashedPassword, gender, profilePic})
        
        if (newUser) {
            // GENERATE THE JWT TOKEN
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        } else {
            return res.status(400).json({message: "Invalid User data"});
        }

    } catch(err) {
        console.log("Error in signup controller", err.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "Username and password are required"
            });
        }
        const user = await User.findOne({username});
        const isPassCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPassCorrect) {
            return res.status(400).json({message: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch(err) {  
        console.log("Error in login controller", err.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({
            message: "Logged out successfully"
        })
    } catch(err) {
        console.log("Error in logout controller", err.message);
        res.status(500).json({message: "Internal Server Error"})
    }
}


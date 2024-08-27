import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try{
        const {fullName,username,password,confirmPassword,gender}= req.body;

        //Checking if password is equal to confirm Password or not  
        if(password !== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match"})
        }

        const user = await User.findOne({username});

        if(user) {
            return res.status(400).json({error: "USer already exists"})
        }

        //Hashing the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const boyNumber = Math.floor(Math.random() * 54) + 1;
        const girlNumber = Math.floor(Math.random() * 16) + 55;

        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/public/${boyNumber}`
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/public/${girlNumber}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser) {
            //Generating the JWT Token here
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })
        } else {
            res.status(400). json({error: "Invalid user data"});
        }


    }catch(error) {
        console.log("Error in signup controller ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try{
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect) {
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenandSetCookie(user._id, res);

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch(error) {
        console.log("Error in login controller ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const logout = (req, res) => {
    try{
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out Successfully"});
    }  catch(error) {
        console.log("Error in logout controller ", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

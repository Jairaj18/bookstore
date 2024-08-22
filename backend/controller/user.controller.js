import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async(req,res) =>{
    try{
        const {fullname, email, password} = req.body;
        const user= await User.findOne({email})
        if(user){
            return res.status(400).json({
                message: "User Already registered"
            })
        }
        const hashpassword = await bcryptjs.hash(password,10)
        const createdUser = new User({
            fullname,
            email,
            password: hashpassword,
        })
        await createdUser.save()
        res.status(201).json({
            message:"User created successfully",
            user:{
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            }
        })
    }catch(error){
        if(error.response){
            console.log(err)
            alert("error :", err.message.data.message)
        }
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // If login is successful, return user info
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (err) {
        console.log("Error:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
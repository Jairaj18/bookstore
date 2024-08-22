import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    message:{
        type:String,
        required: true
    }
})
const ContactMe = mongoose.model("contact_me",contactSchema)
export default ContactMe;
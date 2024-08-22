import ContactMe from "../model/contact.model.js"; 

export const contact = async(req,res) =>{
    try{
        const {fullname, email, message} = req.body;
       
        const createdCustomer = new ContactMe({
            fullname,
            email,
            message,
        })
        await createdCustomer.save()
        res.status(201).json({
            message:"Message send successfully",
            user:{
                _id: createdCustomer._id,
                fullname: createdCustomer.fullname,
                email: createdCustomer.email,
                message: createdCustomer.message
            }
        })
    }catch(error){
        if(error.response){
            console.log(err)
            alert("error :", err.message.data.message)
        }
    }
}

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./router/book.routes.js"
import cors from "cors"
import userRouter from "./router/user.router.js"
import contactRoute from "./router/contact.router.js"

const app = express();
app.use(cors());
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

app.use("/book",bookRoute)
app.use("/user",userRouter)
app.use("/contact",contactRoute)

app.listen(port,()=>{
    console.log(`Exmple app listening on port${port}`)
});
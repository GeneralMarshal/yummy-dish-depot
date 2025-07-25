import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { mealRouter } from "./routes/mealRouter"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { userRouter } from "./routes/userRouter"

dotenv.config()
const mongoUri = process.env.MONGO_URI

const app = express()

app.use(cors({ origin: "*"}))

app.use(bodyParser.json())

app.use("/meal", mealRouter)
app.use("/user", userRouter)


if(mongoUri){
    mongoose.connect(mongoUri)
    .then(()=>{
        
        app.listen((process.env.PORT), ()=> {
            console.log(`connected to db and running on port ${process.env.PORT}🚀`)
        })
    })
    .catch((err)=>{
        console.log(err) 
    })  

} else{
    console.log("couldn't connect to database")
}




import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import { mealRouter } from "./routes/mealRouter"

const app = express()

app.use(cors({ origin: "*"}))

app.use(bodyParser.json())

app.use("/meal", mealRouter)

app.listen((4040), ()=> {
    console.log("we are live")
    console.log(`running on port ${4040}`)
})
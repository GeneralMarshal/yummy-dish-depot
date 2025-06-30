import { timeStamp } from "console";
import mongoose from "mongoose";

const Schema = mongoose.Schema

const dishesSchema = new Schema({
    user: { type: String, required: true},
    name: { type: String, required: true},
    price: { type: Number, required: true},
    category: { type: String, required: true},
}, {timestamps: true})

export default mongoose.model("yummyDish", dishesSchema)
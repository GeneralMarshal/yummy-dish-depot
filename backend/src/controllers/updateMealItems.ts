import { Request, Response } from "express";
import mongoose from "mongoose";
import dishesModel from "../models/dishesModel";

export default async function updateMealItems( req: Request, res:Response){
    const { id, name, price, category } = req.body
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid id"})
    }

    const updatedDish = await dishesModel.findOneAndUpdate({_id: id}, {_id:id, name:name, price: price, category: category})

    if(!updatedDish){
        res.status(400).json({error: " invalid meal id"})
    }
    
    res.status(200).send(updatedDish)
}
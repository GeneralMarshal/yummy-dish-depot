import { Request, Response } from "express";
import { RequestHandler } from "express";
import mongoose from "mongoose";
import dishesModel from "../models/dishesModel";


export default async function(req:Request, res:Response){
    const { id } = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)){
         res.status(404).json({error: "invalid id"})
    }
    const dish = await dishesModel.findOneAndDelete({_id: id})

    if(!dish){
         res.status(404).json({error: "There's no such meal"})
    }
    res.status(200).send(dish)

}


import { Request, Response } from "express";
import removeMeal from "../actions/removeMeal";


export default function deleteMealItems( req: Request, res:Response){
    const { id } = req.body
    removeMeal(id)
    const result = removeMeal(id)
    res.send({message: result})
    
}
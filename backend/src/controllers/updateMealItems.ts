import { Request, Response } from "express";
import editMeal from "../actions/editMealItems";

export default function updateMealItems( req: Request, res:Response){
    const { body } = req
    editMeal(body)
    const result = editMeal(body)
    res.send({message: result})
}
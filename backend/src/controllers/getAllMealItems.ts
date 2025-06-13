import { Response, Request } from "express";
import listAllMeals from "../actions/listAllMeals";

export default function getAllFoodItems( req: Request, res: Response){
    let allMeals = listAllMeals()
    res.send(JSON.parse(allMeals))
}
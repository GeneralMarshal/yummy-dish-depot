import { Response, Request } from "express";
import listAllMeals from "../actions/listAllMeals";

export default async function getAllFoodItems( req: Request, res: Response){
     try{
        const allMeals = await listAllMeals()
        res.status(200).json(allMeals)
     }catch(error){
        if ( error instanceof Error){
            res.status(404).json({error: error.message})
        } else{
            res.status(404).json("an unexpected error occured")
        }
     }
}
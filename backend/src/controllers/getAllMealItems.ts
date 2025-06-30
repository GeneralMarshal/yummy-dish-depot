import { Response, Request } from "express";
import listAllMeals from "../actions/listAllMeals";

interface AuthRequest extends Request{
    user?: any
}


export default async function getAllFoodItems( req: AuthRequest, res: Response){
     try{
        if(!req.user){
            res.status(401)
            throw new Error("not authorized")
        }
        const allMeals = await listAllMeals( req.user._id.toString() )
        res.status(200).json(allMeals)
     }catch(error){
        if ( error instanceof Error){
            res.status(404).json({error: error.message})
        } else{
            res.status(404).json("an unexpected error occured")
        }
     }
}
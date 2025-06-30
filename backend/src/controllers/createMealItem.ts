import { Request, Response} from "express"
import dishesModel from "../models/dishesModel"

interface AuthRequest extends Request{
    user?: any
}

export default async function createFoodItem( req: AuthRequest, res: Response){

   const { name, price, category} = req.body
       try{
        if(!req.user){
            res.status(401)
            throw new Error("not authorized")
        }
           const dish = await dishesModel.create({ name, price, category, user:req.user._id})
           res.status(200).json(dish)
       } catch (error: any) {
           res.status(400).json({error: error.message})
       }

}   
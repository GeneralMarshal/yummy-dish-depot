import { Request, Response} from "express"
import addMeal from "../actions/addNewMeal"
import dishesModel from "../models/dishesModel"

export default async function createFoodItem( req: Request, res: Response){

   const { name, price, category} = req.body
       try{
           const dish = await dishesModel.create({ name, price, category})
           res.status(200).json(dish)
       } catch (error) {
           console.log(error)
       }

}   
import { Request, Response} from "express"
import addMeal from "../actions/addNewMeal"

export default function createFoodItem( req: Request, res: Response){
   const {initial, name, price, category} = req.body
   addMeal( name, price, category)
   res.send({message: "meal added successfully"})
}   
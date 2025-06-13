import  express  from "express"
import getAllFoodItems from "../controllers/getAllMealItems"
export const mealRouter = express.Router()

import createFoodItem from "../controllers/createMealItem"
import updateMealItems from "../controllers/updateMealItems"
import deleteMealItems from "../controllers/deleteMealItems"

mealRouter.get("/", getAllFoodItems)

mealRouter.post("/", createFoodItem)

mealRouter.patch("/", updateMealItems)

mealRouter.delete("/", deleteMealItems)


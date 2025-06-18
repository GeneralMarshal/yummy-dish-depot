import  express  from "express"
import getAllFoodItems from "../controllers/getAllMealItems"
import createFoodItem from "../controllers/createMealItem"
import updateMealItems from "../controllers/updateMealItems"
import deleteMealItems from "../controllers/deleteMealItems"




export const mealRouter = express.Router()


mealRouter.get("/", getAllFoodItems)

mealRouter.delete("/", deleteMealItems)

mealRouter.post("/", createFoodItem)

mealRouter.patch("/", updateMealItems)








import  express  from "express"
import getAllFoodItems from "../controllers/getAllMealItems"
import createFoodItem from "../controllers/createMealItem"
import updateMealItems from "../controllers/updateMealItems"
import deleteMealItems from "../controllers/deleteMealItems"
import protect from "../middleware/authMiddleware"



export const mealRouter = express.Router()


mealRouter.get("/", protect, getAllFoodItems)

mealRouter.delete("/", deleteMealItems)

mealRouter.post("/", protect, createFoodItem)

mealRouter.patch("/", updateMealItems)








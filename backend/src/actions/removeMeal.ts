import fs from "fs"
import { mealFile } from "../utils/constants"
import { FoodItem } from "../types/FoodItem"

export default function removeMeal(id: string){
    let content = fs.readFileSync(mealFile, "utf-8")
    const mealList = content ? JSON.parse(content) : []

    const updatedMealList = mealList.filter( (meal:FoodItem) => meal.id != id)
    if(updatedMealList){
        fs.writeFileSync(mealFile, JSON.stringify(updatedMealList, null, 4))
        return "success"
    } else{
        return "failed"
    }

}
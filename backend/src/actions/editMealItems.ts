import fs from "fs"
import { mealFile } from "../utils/constants"
import { FoodItem } from "../types/FoodItem"

export default function editMeal( body:FoodItem ){
    const { id, name, price, category} = body
    const content = fs.readFileSync(mealFile, "utf-8")
    const mealList = content ? JSON.parse(content) : []

    const mealIndex = mealList.findIndex( (meal:FoodItem) => meal.id === id)

    if(mealIndex === -1){
        return " failed"
    }else{
        mealList[mealIndex] = {
            id: id,
            name: name,
            price: price,
            category: category
        }
        fs.writeFileSync(mealFile, JSON.stringify(mealList, null, 2))
        return "success"
    }
}
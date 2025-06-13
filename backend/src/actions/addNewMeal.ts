import { FoodItem } from "../types/FoodItem"
import listAllMeals from "./listAllMeals"
import { mealFile } from "../utils/constants"
import fs from "fs"


export default function addMeal(name:string, price: number, category: string){

    const content = fs.readFileSync(mealFile, "utf-8")
    const mealList:FoodItem[] = content ? JSON.parse(content) : []

    let id = null
    if (mealList.length === 0){
        id = 1
        let mealList = [
            {
                id: 1,
                name: name,
                price: Number(price),
                category: category
              }
        ]
        fs.writeFileSync(mealFile, JSON.stringify(mealList, null, 2))
    }
    else if (mealList.length > 0){
        console.log(mealList)
        id = mealList[mealList.length - 1].id + 1
        mealList.push(
            {
                id: id,
                name: name,
                price: Number(price),
                category: category
            },
        )
        fs.writeFileSync(mealFile, JSON.stringify(mealList, null, 2))
    }
    
}
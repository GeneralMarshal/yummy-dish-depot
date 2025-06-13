import fs from "fs"
import { mealFile } from "../utils/constants"
export default function listAllMeals(){
    let allMeals = fs.readFileSync(mealFile, "utf-8")
    return(allMeals)
}
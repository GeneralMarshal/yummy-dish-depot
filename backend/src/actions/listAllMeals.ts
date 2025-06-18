import fs from "fs"
import { mealFile } from "../utils/constants"
import dishesModel from "../models/dishesModel"
import { Request, Response } from "express"

export default async function listAllMeals(){
    try{
        const dishesList = await dishesModel.find({})
        console.log(dishesList)
        return dishesList
    }catch(error){
        throw error
    }
    // let allMeals = fs.readFileSync(mealFile, "utf-8")
    // return(allMeals)
}
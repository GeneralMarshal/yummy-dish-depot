import fs from "fs"
import { mealFile } from "../utils/constants"
import dishesModel from "../models/dishesModel"
import { Request, Response } from "express"

export default async function listAllMeals( id: string ){
    try{
        const dishesList = await dishesModel.find({user: id})
        console.log(dishesList)
        return dishesList
    }catch(error){
        throw error
    }
    // let allMeals = fs.readFileSync(mealFile, "utf-8")
    // return(allMeals)
}
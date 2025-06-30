import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

interface AuthRequest extends Request{
    user?: any
}


function createToken(_id: string){
    const secret = process.env.SECRET

    if (!secret){
        throw Error("jwt secret not defined in environmental variables")
    }

    return jwt.sign({_id}, secret, { expiresIn: "3d"})
  }

const loginUser = async (req:Request, res:Response) => {
    const {email, password} = req.body
    try{
        const user = await User.login(email, password)

        const userId = user._id?.toString()
        
        if(!userId){
            throw Error("user id not found to generate token")
        }
        const token = createToken(userId)

        res.status(200).json({id: userId, email, token})
    } catch(error: any){
        res.status(400).json({error: error.message})
    }
}


const signupUser = async (req:Request, res:Response) => {

    const {email, password} = req.body
    try{
        const user = await User.signup(email, password)

        const userId = user._id?.toString()
        
        if(!userId){
            throw Error("user id not found to generate token")
        }
        const token = createToken(userId)

        res.status(200).json({id: userId, email, token})
    }catch(error: any){
        res.status(400).json({error: error.message})
    }
    
}

const getMe = async ( req:AuthRequest, res:Response) =>{
    const user = await User.findById( req.user.id).select("-password")


    res.status(200).json(user)
    
}

export {signupUser, loginUser, getMe}
 
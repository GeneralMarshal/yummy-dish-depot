import jwt from "jsonwebtoken";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request{
    user?: any
}

export default async function protect( req: AuthRequest, res:Response, next: NextFunction){
    let token

    if(req.headers.authorization){
        try{
            // get token from bearer
             token = req.headers.authorization.split(" ")[1]

             if(!process.env.SECRET){
                throw new Error("env secret cannot be found")
             }

             //verify token
             const decoded = jwt.verify(token, process.env.SECRET) as { _id: string}


             //get user from the token
             const user = await User.findById( decoded._id ).select("-password")
             
             if (!user) {
                res.status(401);
                throw new Error("Not authorized: user not found");
              }

              req.user = user
             next()
        }
        catch(error){
            console.log(error)
            res.status(401)
            throw new Error("not authorized")
        }
    }  else {
        res.status(401)
        throw new Error("Not authorized, token required")
    }
   
}
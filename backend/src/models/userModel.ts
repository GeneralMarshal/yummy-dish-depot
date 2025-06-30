import mongoose, {Document,  Model} from "mongoose";
import  validator  from "validator"
import bcrypt from "bcrypt"


interface IUser extends Document{
    email: string;
    password: string;
}

interface IUserModel extends Model<IUser> {
    signup(email: string, password: string): Promise<IUser>;
    login(email: string, password: string): Promise<IUser>;
  }


const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true 
    }
})

userSchema.statics.login = async function (email, password){
    if( !email || !password){
        throw Error("All fields are required")
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error("This email does not exist")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("password does not match")
    }
    return user
}

userSchema.statics.signup = async function (email, password) {

    if( !email || !password){
        throw Error("All fields are required")
    }

    if(!validator.isEmail(email)){
        throw Error("The email is invalid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("The password is not strong enough")
    }

    const ifExists = await this.findOne({email})

    if(ifExists){
        throw Error("This email is already being used")
    }

    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user
}
const User = mongoose.model<IUser, IUserModel>("userCook", userSchema);
export default User
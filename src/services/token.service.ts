import jwt from "jsonwebtoken";
import { SECRET_WORD } from "../config/variables.env";

export const generateToken = (id: number) => {

    return jwt.sign({id}, SECRET_WORD, {
        
        expiresIn: 6000,
    })
}

export const verifyToken = (token: string) => {

    const verify = token ? token : ''

    return jwt.decode(verify)
}

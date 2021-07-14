import { Request, Response, NextFunction } from "express"
import * as auth from "../services/token.service"
import { UserRepository } from "../repository/User.repository";
import { getCustomRepository } from "typeorm";

export const verifySession = async (req: Request, res: Response, next: NextFunction) => {
    const _userRepository = getCustomRepository(UserRepository);

    const token = req.cookies['token']

    //Verify ruta y token

    const decoded = auth.verifyToken(token);

    if(!decoded) return res.json({error: "Token is invalid"});

    //@ts-ignore
    const user = await _userRepository.findById(decoded.id);

    res.locals.user = user;

    next()

}
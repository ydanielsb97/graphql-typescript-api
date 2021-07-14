import * as token from "./token.service";
import { getCustomRepository } from "typeorm";
import {UserRepository} from "../repository/User.repository"
import { CreateUserDto } from "../dto/createUser.dto";




export const verifyCredentials = async (userName: string, password: string) => {
    const _userRepository: UserRepository = getCustomRepository(UserRepository)
    const user = await _userRepository.findByUsername(userName)

    if(!user) return {error: "Incorrect username or password"}
    
    const passValid = await user.comparePassword(password);

    if(!passValid) return {error: "Incorrect username or password"}

    const newToken = token.generateToken(user.id)

    return {newToken}
}

export const createUser = async (createUserDto: CreateUserDto) => {
    const _userRepository: UserRepository = getCustomRepository(UserRepository)
    const creation = await _userRepository.createUser(createUserDto);

    if(creation.error) return creation;

    const newToken = token.generateToken(creation.id);

    return {newToken}

}


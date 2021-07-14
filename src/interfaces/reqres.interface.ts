import { Request, Response } from "express";
import User from "../entities/user.entity";

export interface IResponse extends Response {
    user: User;
}
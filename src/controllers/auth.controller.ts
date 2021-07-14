import { Request, Response } from "express";
import * as _authService from "../services/auth.service";

export const logIn = async (req: Request, res: Response) => {
  try {
    const { userName, password } = req.body;

    const validation: any = await _authService.verifyCredentials(
      userName,
      password
    );

    if (validation.error) return res.json(validation);

    res.cookie("token", validation.newToken, { httpOnly: true });

    return res.json(validation);
  } catch (error) {
    return res.json({ error });
  }
};

export const Register = async (req: Request, res: Response) => {
  try {
    const creation = await _authService.createUser(req.body);

    if (creation.error) return res.json(creation);

    res.cookie("token", creation.newToken, { httpOnly: true });
    
    return res.json(creation);
  } catch (error) {
    return res.json({ error });
  }
};

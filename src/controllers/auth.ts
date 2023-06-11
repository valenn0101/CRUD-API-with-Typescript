import { type Request, type Response } from "express";
import { createUser, loginUser } from "../services/authService";
import type Auth from "../interfaces/auth.interface";
import validateFormData from "../utils/validate.form";
import { handleHttp } from "../utils/error.handle";

const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const formData: Auth = req.body;
  if (validateFormData(formData)) {
    const createdUser = await createUser(formData);
    res.status(201).json(createdUser);
  } else {
    res
      .status(400)
      .json({ error: "Missing required data in the request body" });
  }
};

const loginController = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const userLogin = await loginUser(email, password);

  if (userLogin.hasOwnProperty("false")) {
    res.status(403).send(userLogin);
  } else {
    res.status(200).json({
      token: userLogin.token,
      user: userLogin.user.email
    });
  }
};

export { createUserController, loginController };

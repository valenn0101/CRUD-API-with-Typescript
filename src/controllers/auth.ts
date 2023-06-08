import { type Request, type Response } from "express";
import { createUser } from "../services/authService";
import type Auth from "../interfaces/auth.interface";
import validateFormData from "../utils/validate.form";
import { handleHttp } from "../utils/error.handle";

const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const formData: Auth = req.body;
    if (validateFormData(formData)) {
      const createdUser = await createUser(formData);
      res.status(201).json(createdUser);
    } else {
      res
        .status(400)
        .json({ error: "Missing required data in the request body" });
    }
  } catch (error) {
    handleHttp(res, error.toString());
  }
};

const loginController = async (
  req: Request,
  res: Response
): Promise<void> => {};

export { createUserController, loginController };

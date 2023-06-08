import { type NextFunction, type Request, type Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || " ";
    const jwt = jwtByUser.split(" ").pop();
    const userVerify = verifyToken(`${jwt}`);
    console.log(userVerify);
    if (!userVerify) {
      res.status(401).send("JWT No valid");
    }
    console.log({ jwt });
    next();
  } catch (e) {
    res.status(400).send("Sesssion no valid");
  }
};

export default checkJWT;

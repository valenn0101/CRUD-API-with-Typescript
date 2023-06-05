import {
  Router,
  type Request,
  type Response,
  type NextFunction
} from "express";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ data: "products" });
});

export { router };

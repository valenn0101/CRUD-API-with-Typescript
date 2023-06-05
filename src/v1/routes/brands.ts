import {
  Router,
  type Request,
  type Response,
  type NextFunction
} from "express";
import prisma from "../../config/prisma";

const router = Router();

router.get(
  "/",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const brands = await prisma.brands.findMany();
      res.status(200).json({ brands, message: "These are the brands" });
    } catch (error) {
      next(error);
    }
  }
);

export { router };

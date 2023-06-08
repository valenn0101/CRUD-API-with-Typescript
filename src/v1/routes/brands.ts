import { Router } from "express";
import {
  deleteBrand,
  getBrand,
  getBrands,
  postBrand,
  updateBrand
} from "../../controllers/brands";
import checkJWT from "../../middlewares/session";

const router = Router();

router.get("/", getBrands);
router.get("/:id", getBrand);
router.post("/", checkJWT, postBrand);
router.put("/:id", checkJWT, updateBrand);
router.delete("/:id", checkJWT, deleteBrand);

export { router };

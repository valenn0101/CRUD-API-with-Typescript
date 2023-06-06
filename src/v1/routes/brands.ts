import { Router } from "express";
import {
  deleteBrand,
  getBrand,
  getBrands,
  postBrand,
  updateBrand
} from "../../controllers/brands";

const router = Router();

router.get("/", getBrands);
router.get("/:id", getBrand);
router.post("/", postBrand);
router.put("/:id", updateBrand);
router.delete("/:id", deleteBrand);

export { router };

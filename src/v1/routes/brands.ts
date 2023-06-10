import { Router } from "express";
import {
  deleteBrand,
  getBrand,
  getBrands,
  postBrand,
  updateBrand
} from "../../controllers/brands";
import checkJWT from "../../middlewares/session";
import multerMiddleware from "../../middlewares/multer";

const router = Router();

router.get("/", getBrands);
router.get("/:id", getBrand);
router.post("/", multerMiddleware.single("logo_url"), checkJWT, postBrand);
router.put("/:id", multerMiddleware.single("logo_url"), checkJWT, updateBrand);
router.delete("/:id", checkJWT, deleteBrand);

export { router };

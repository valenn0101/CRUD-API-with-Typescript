import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  updateProduct
} from "../../controllers/products";
import checkJWT from "../../middlewares/session";
import multerMiddleware from "../../middlewares/multer";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", checkJWT, multerMiddleware.single("Image_url"), postProduct);
router.put(
  "/:id",
  checkJWT,
  multerMiddleware.single("Image_url"),
  updateProduct
);
router.delete("/:id", checkJWT, deleteProduct);

export { router };

import { Router } from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  updateProduct
} from "../../controllers/products";
import checkJWT from "../../middlewares/session";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", checkJWT, postProduct);
router.put("/:id", checkJWT, updateProduct);
router.delete("/:id", checkJWT, deleteProduct);

export { router };

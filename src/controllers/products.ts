import { type Request, type Response } from "express";
import { handleHttp } from "../utils/error.handle";
import BaseService from "../services/baseService";

const productService = new BaseService<"products">("products");

const getProduct = async (req: Request, res: Response): Promise<void> => {
  const productId = Number(req.params.id);
  try {
    const product = await productService.getItem(productId);
    res.status(200).json(product);
  } catch (e) {
    handleHttp(res, "Error get Product");
  }
};

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await productService.getItems();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

const postProduct = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error post Product");
  }
};

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error update Product");
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const productId = Number(req.params.id);
  try {
    const product = await productService.deleteItem(productId);
    res.status(200).send({ message: `Deleted Product ${productId}`, product });
  } catch (e) {
    handleHttp(res, "Error delete Product");
  }
};

export { getProduct, getProducts, postProduct, updateProduct, deleteProduct };

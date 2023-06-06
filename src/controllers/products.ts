import { type Request, type Response } from "express";
import { handleHttp } from "../utils/error.handle";
import BaseService from "../services/baseService";

const getProduct = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error get Product");
  }
};

const productService = new BaseService('products');

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getItems();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
}

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
  try {
  } catch (e) {
    handleHttp(res, "Error delete Product");
  }
};

export { getProduct, getProducts, postProduct, updateProduct, deleteProduct };

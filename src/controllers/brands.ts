import { type Request, type Response } from "express";
import { handleHttp } from "../utils/error.handle";
import BaseService from "../services/baseService";

const getBrand = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error get Product");
  }
};

const brandService = new BaseService();

const getBrands = async (req: Request, res: Response) => {
  try {
    const brands = await brandService.getItems();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch brands' });
  }
};
}

const postBrand = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error post Product");
  }
};

const updateBrand = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error update Product");
  }
};

const deleteBrand = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error delete Product");
  }
};

export { getBrand, getBrands, postBrand, updateBrand, deleteBrand };

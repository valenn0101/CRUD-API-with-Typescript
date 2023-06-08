import { type Request, type Response } from "express";
import { handleHttp } from "../utils/error.handle";
import BaseService from "../services/baseService";
import { type Brands } from "../interfaces/interface";
import validateFormData from "../utils/validate.form";

const brandService = new BaseService<"brands">("brands");

const getBrand = async (req: Request, res: Response): Promise<void> => {
  const brandId = Number(req.params.id);
  try {
    const brand = await brandService.getItem(brandId);
    res.status(200).json(brand);
  } catch (e) {
    handleHttp(res, "Error get Brand");
  }
};

const getBrands = async (req: Request, res: Response): Promise<void> => {
  try {
    const brands = await brandService.getItems();
    res.json(brands);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Brands" });
  }
};

const postBrand = async (req: Request, res: Response): Promise<void> => {
  try {
    const formData: Brands = req.body;
    if (validateFormData(formData)) {
      const createdBrand = await brandService.createItem(formData);
      res.status(201).json(createdBrand);
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } catch (error) {
    handleHttp(res, error.toString());
  }
};

const updateBrand = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error update Brand");
  }
};

const deleteBrand = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (e) {
    handleHttp(res, "Error delete Brand");
  }
};

export { getBrand, getBrands, postBrand, updateBrand, deleteBrand };

import { type Request, type Response } from "express";

export const getAll = (req: Request, res: Response): void => {
  res.json({
    msg: "getProductos"
  });
};

export const getOne = (req: Request, res: Response): void => {
  const { id } = req.params;

  res.json({
    msg: "getProductos",
    id
  });
};

export const post = (req: Request, res: Response): void => {
  const { body } = req;

  res.json({
    msg: "Posting....",
    body
  });
};

export const update = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "updating...",
    body,
    id
  });
};

export const deleteAll = (req: Request, res: Response): void => {
  const { id } = req.params;

  res.json({
    msg: "Deleteando...",
    id
  });
};

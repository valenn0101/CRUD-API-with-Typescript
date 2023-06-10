import { type Response } from "express";

const handleHttp = (res: Response, error: string): void => {
  res.status(500).send({ error });
};

export { handleHttp };

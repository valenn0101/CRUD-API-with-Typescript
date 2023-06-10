import { type Request } from "express";
import multer, { diskStorage } from "multer";

const PATH_STORAGE = `${process.cwd()}/storage`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.file, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.file, cb: any) {
    const ext = file.originalname.split(".").pop();
    const filename = `image-${Date.now()}.${ext}`;
    cb(null, filename);
  }
});

const multerMiddleware = multer({ storage });

export default multerMiddleware;

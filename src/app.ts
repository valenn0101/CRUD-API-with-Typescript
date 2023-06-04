import express, {
  type Application,
  type Request,
  type Response,
  type NextFunction
} from "express";
import routes from "./v1/routes/index-route.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.middlewares();
    this.routes();
  }

  private config(): void {
    // this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(express.json());
    this.app.use(bodyParser.json());
  }

  private middlewares(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header("Access-Control-Allow-Origin");
      res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, Set-Cookie"
      );
      res.header("Access-Control-Allow-Credentials", "true");
      next();
    });
  }

  private routes(): void {
    this.app.use("/api/v1/crud/", routes);
  }
}

export default new App().app;

import { v1Router } from "./v1/v1";
import { Router } from "express";

export const apiRouter = Router();
apiRouter.use("/v1", v1Router);

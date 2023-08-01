import { apiRouter } from "./api/api";
import { Router } from "express";

export const mainRouter = Router();
mainRouter.use("/api", apiRouter);

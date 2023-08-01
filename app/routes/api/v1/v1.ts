import { deliveryRouter } from "./deliveries/deliveries";
import { Router } from "express";

export const v1Router = Router();
v1Router.use("/deliveries", deliveryRouter);

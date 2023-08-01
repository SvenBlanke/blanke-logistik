import { Router } from "express";
import {
  getDeliveries,
  addDelivery,
  updateDelivery,
  deleteDelivery
} from "../../../../controllers/deliveries";

export const deliveryRouter = Router();
deliveryRouter.route("/").get(getDeliveries);
deliveryRouter.route("/").post(addDelivery);
deliveryRouter.route("/").put(updateDelivery);
deliveryRouter.route("/").delete(deleteDelivery);

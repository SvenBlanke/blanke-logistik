import { Request, Response } from "express";
import { readFileSync, writeFileSync } from "fs";
const jsonDir = "./app/data/currentDeliveries.json";

type deliveryType = { name: string };

export function getDeliveries(req: Request, res: Response) {
  const deliveriesJson = readFileSync(jsonDir, "utf8");
  const deliveries = JSON.parse(deliveriesJson);
  res.status(200).json(deliveries);
}

export function addDelivery(req: Request, res: Response) {
  const deliveriesJson = readFileSync(jsonDir, "utf8");
  const deliveries = JSON.parse(deliveriesJson);
  deliveries[deliveries.length] = req.body;
  writeFileSync(jsonDir, JSON.stringify(deliveries));
  res.status(201).send(req.body);
}

export function updateDelivery(req: Request, res: Response) {
  const deliveryIndex = Number(req.query.index);
  const deliveriesJson = readFileSync(jsonDir, "utf8");
  const deliveries = JSON.parse(deliveriesJson);
  deliveries[deliveryIndex] = req.body;
  writeFileSync(jsonDir, JSON.stringify(deliveries));
  res.status(200).send(req.body);
}

export function deleteDelivery(req: Request, res: Response) {
  const deliveryIndex = Number(req.query.index);
  const deliveriesJson = readFileSync(jsonDir, "utf8");
  const deliveries = JSON.parse(deliveriesJson);
  const updatedDeliveries = [];
  deliveries.filter((delivery: deliveryType, index: number) => {
    if (index !== deliveryIndex) {
      updatedDeliveries.push(delivery);
    }
  });
  writeFileSync(jsonDir, JSON.stringify(updatedDeliveries));
  res.status(200).json({ status: "ok" });
}

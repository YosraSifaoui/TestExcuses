import { Router, Request, Response } from "express";
import Excuse, { ExcuseMap } from "../models/excuse";
import database from "../database";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  ExcuseMap(database);
  const result = await Excuse.findAll();
  res.status(200).json({ excuses: result });
});

router.post("/", async (req: Request, res: Response) => {
  ExcuseMap(database);
  let newExcuse = req.body;
  const result = await Excuse.create(newExcuse);
  newExcuse = result.dataValues;
  res.status(201).json({ excuse: newExcuse });
});

export default router;

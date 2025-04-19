import { Request, Response } from "express";
import { updateDb } from "../utils/updateDb.util";

export const updateLatestProfile = async (req: Request, res: Response) => {
  try {
    const response = await updateDb();

    if (response) {
      res.status(200).json({ message: "success" });
    } else {
      res.status(500).json({ message: "failed" });
    }
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

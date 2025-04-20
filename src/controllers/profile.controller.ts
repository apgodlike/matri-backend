import { Request, Response } from "express";
import { updateDb } from "../utils/updateDb.util";
import {
  getAllProfilesFromDb,
  shortListProfileService,
} from "../services/profile.service";
import { boolean } from "zod";

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

export const getAllProfiles = async (req: Request, res: Response) => {
  try {
    const page = req.query.page as string;
    const limit = 20; //req.query.limit as string;
    const skip = (parseInt(page) - 1) * limit;
    const profiles = await getAllProfilesFromDb(skip);
    if (profiles) {
      res.status(200).json(profiles);
    }
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

export const updateShortlistProfile = async (req: Request, res: Response) => {
  try {
    const profileId = req.query.profileId as string;
    const shortlisted = req.query.shortlisted as string;
    const serviceResponse = await shortListProfileService(
      profileId,
      Boolean(shortlisted)
    );
    return res.status(200).json(serviceResponse);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

export const getShortlistProfile = async (req: Request, res: Response) => {
  try {
    const profileId = req.query.profileId as string;
    const shortlisted = req.query.shortlisted as string;
    const serviceResponse = await shortListProfileService(
      profileId,
      Boolean(shortlisted)
    );
    return res.status(200).json(serviceResponse);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

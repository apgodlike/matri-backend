import { Router } from "express";
import {
  getAllProfiles,
  updateLatestProfile,
  updateShortlistProfile,
} from "../controllers/profile.controller";

const profileRouter = Router();

profileRouter.get("/update-profiles", updateLatestProfile);

profileRouter.get("/all-profiles", getAllProfiles);

// profileRouter.get("/shortlist", getShortlistProfile);

export default profileRouter;

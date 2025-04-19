import { Router } from "express";
import { updateLatestProfile } from "../controllers/profile.controller";

const profileRouter = Router();

profileRouter.get("/update-profiles", updateLatestProfile);

export default profileRouter;

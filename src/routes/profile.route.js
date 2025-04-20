"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("../controllers/profile.controller");
const profileRouter = (0, express_1.Router)();
profileRouter.get("/update-profiles", profile_controller_1.updateLatestProfile);
profileRouter.get("/all-profiles", profile_controller_1.getAllProfiles);
// profileRouter.get("/shortlist", getShortlistProfile);
exports.default = profileRouter;

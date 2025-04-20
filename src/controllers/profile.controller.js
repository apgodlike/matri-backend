"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortlistProfile = exports.updateShortlistProfile = exports.getAllProfiles = exports.updateLatestProfile = void 0;
const updateDb_util_1 = require("../utils/updateDb.util");
const profile_service_1 = require("../services/profile.service");
const updateLatestProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, updateDb_util_1.updateDb)();
        if (response) {
            res.status(200).json({ message: "success" });
        }
        else {
            res.status(500).json({ message: "failed" });
        }
    }
    catch (err) {
        res.status(500).json({ message: "error" });
    }
});
exports.updateLatestProfile = updateLatestProfile;
const getAllProfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = req.query.page;
        const limit = 20; //req.query.limit as string;
        const skip = (parseInt(page) - 1) * limit;
        const profiles = yield (0, profile_service_1.getAllProfilesFromDb)(skip);
        if (profiles) {
            res.status(200).json(profiles);
        }
    }
    catch (err) {
        res.status(500).json({ message: "error" });
    }
});
exports.getAllProfiles = getAllProfiles;
const updateShortlistProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileId = req.query.profileId;
        const shortlisted = req.query.shortlisted;
        const serviceResponse = yield (0, profile_service_1.shortListProfileService)(profileId, Boolean(shortlisted));
        return res.status(200).json(serviceResponse);
    }
    catch (err) {
        res.status(500).json({ message: "error" });
    }
});
exports.updateShortlistProfile = updateShortlistProfile;
const getShortlistProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profileId = req.query.profileId;
        const shortlisted = req.query.shortlisted;
        const serviceResponse = yield (0, profile_service_1.shortListProfileService)(profileId, Boolean(shortlisted));
        return res.status(200).json(serviceResponse);
    }
    catch (err) {
        res.status(500).json({ message: "error" });
    }
});
exports.getShortlistProfile = getShortlistProfile;

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
exports.shortListProfileService = exports.getAllProfilesFromDb = exports.getProfiles = void 0;
const prisma_1 = require("../utils/prisma");
const getProfiles = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield prisma_1.prismaInstance.profile.findMany({
            where: {
                isDeleted: false,
            },
        });
        return profiles;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getProfiles = getProfiles;
const getAllProfilesFromDb = (skip) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const constructedProfiles = [];
        const totalCount = yield prisma_1.prismaInstance.profile.count({
            where: {
                isDeleted: false,
            },
        });
        let totalPages = 1;
        if (totalCount > 20) {
            totalPages = Math.ceil(totalCount / 20);
        }
        const profiles = yield prisma_1.prismaInstance.profile.findMany({
            where: {
                isDeleted: false,
            },
            skip: skip,
            take: 20,
        });
        for (let i = 0; i < profiles.length; i++) {
            const profile = profiles[i];
            const pictures = yield prisma_1.prismaInstance.picture.findMany({
                where: {
                    profileId: profile.profileId,
                },
            });
            constructedProfiles.push({
                Profile: profile,
                picture: pictures.map((picture) => picture.url),
            });
        }
        return { profiles: constructedProfiles, totalPages };
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.getAllProfilesFromDb = getAllProfilesFromDb;
const shortListProfileService = (profileId, shortlisted) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield prisma_1.prismaInstance.profile.update({
        where: {
            profileId: profileId,
        },
        data: {
            shortlisted,
        },
    });
    return profile;
});
exports.shortListProfileService = shortListProfileService;

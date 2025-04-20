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
exports.updateDb = void 0;
const kvmApiRequest_util_1 = require("./kvmApiRequest.util");
const prisma_1 = require("./prisma");
const updateDb = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const response = yield (0, kvmApiRequest_util_1.kvmApiRequest)(1);
        if (!response) {
            return null;
        }
        const totalCount = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.allMatches) === null || _b === void 0 ? void 0 : _b.count;
        const totalPages = Math.ceil(totalCount / 20);
        for (let i = 1; i <= totalPages; i++) {
            console.log("Page: ", i);
            const response = yield (0, kvmApiRequest_util_1.kvmApiRequest)(i);
            if (!response) {
                return null;
            }
            for (let j = 0; j < response.data.allMatches.profiles.length; j++) {
                if (yield prisma_1.prismaInstance.profile.findFirst({
                    where: { profileId: response.data.allMatches.profiles[j].id },
                })) {
                    // await prismaInstance.secondaryProfile.create({
                    //   data: {
                    //     profileId: response.data.allMatches.profiles[j].id,
                    //     name: response.data.allMatches.profiles[j].name,
                    //     age: response.data.allMatches.profiles[j].ageYear,
                    //   },
                    // });
                    continue;
                }
                const eachProfile = yield (0, kvmApiRequest_util_1.getEachKvmProfile)(response.data.allMatches.profiles[j].id);
                const photos = [];
                if (eachProfile.data.viewProfile.photo) {
                    photos.push(eachProfile.data.viewProfile.photo);
                    console.log("photo: ", eachProfile.data.viewProfile.photo);
                }
                for (let k = 0; k < eachProfile.data.viewProfile.otherPhotos.length; k++) {
                    photos.push(eachProfile.data.viewProfile.otherPhotos[k]);
                }
                const teansRes = yield prisma_1.prismaInstance.$transaction((trnx) => __awaiter(void 0, void 0, void 0, function* () {
                    var _a;
                    const profileCreate = yield trnx.profile.create({
                        data: {
                            profileId: response.data.allMatches.profiles[j].id,
                            name: response.data.allMatches.profiles[j].name,
                            age: response.data.allMatches.profiles[j].ageYear,
                            raasi: eachProfile.data.viewProfile.religious.raasi,
                            star: eachProfile.data.viewProfile.religious.star,
                            city: (_a = eachProfile.data.viewProfile.location) === null || _a === void 0 ? void 0 : _a.city,
                            employment: eachProfile.data.viewProfile.employment,
                            isPhoneNumberVisible: eachProfile.data.viewProfile.phoneVisibility === "TO_ALL_PAID",
                        },
                    });
                    for (let k = 0; k < photos.length; k++) {
                        console.log("photos: ", photos.length, " ", photos);
                        yield trnx.picture.create({
                            data: {
                                profileId: response.data.allMatches.profiles[j].id,
                                url: photos[k],
                            },
                        });
                    }
                    return profileCreate;
                }));
            }
        }
        return { success: true };
    }
    catch (err) {
        console.log(err);
        return null;
    }
});
exports.updateDb = updateDb;

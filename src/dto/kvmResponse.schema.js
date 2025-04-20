"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KvmResponseSchema = void 0;
const zod_1 = require("zod");
const LocationSchema = zod_1.z.object({
    city: zod_1.z.string().nullable(), // <-- fixed
    state: zod_1.z.string().nullable(),
    country: zod_1.z.string().nullable(),
    __typename: zod_1.z.literal("Location").nullable(),
});
const LastCommunicationSchema = zod_1.z.object({
    type: zod_1.z.string().nullable(),
    time: zod_1.z.string().nullable(), // <-- fixed
    content: zod_1.z.string().nullable(),
    likeExpiresIn: zod_1.z.any().nullable(), // still unknown
    __typename: zod_1.z.literal("CommunicationInfo").nullable(),
});
const ProfileSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    lastActiveTime: zod_1.z.string().nullable(),
    ageYear: zod_1.z.number().nullable(),
    height: zod_1.z.string().nullable(),
    education: zod_1.z.string().nullable(),
    maritalStatus: zod_1.z.string().nullable(),
    noOfChildren: zod_1.z.number().nullable(),
    childrenLivingStatus: zod_1.z.any().nullable(),
    occupation: zod_1.z.string().nullable(),
    employedIn: zod_1.z.string().nullable(),
    income: zod_1.z.string().nullable(),
    location: LocationSchema.nullable(),
    totalCommunicationCount: zod_1.z.number().nullable(),
    superSpecialisation: zod_1.z.any().nullable(),
    specialisation: zod_1.z.any().nullable(),
    pgEducation: zod_1.z.any().nullable(),
    educationStatus: zod_1.z.any().nullable(),
    photo: zod_1.z.string().nullable(),
    photoVisibility: zod_1.z.string().nullable(),
    photoCount: zod_1.z.number().nullable(),
    profileCreatedBy: zod_1.z.string().nullable(),
    profileVideoPreview: zod_1.z.any().nullable(),
    isNewlyJoined: zod_1.z.boolean().nullable(),
    isShortlistedByYou: zod_1.z.boolean().nullable(),
    isPaid: zod_1.z.boolean().nullable(),
    viewedDate: zod_1.z.string().nullable(),
    isAssisted: zod_1.z.boolean().nullable(),
    isFeaturedProfile: zod_1.z.boolean().nullable(),
    isPhotoVerified: zod_1.z.boolean().nullable(),
    isIdVerified: zod_1.z.boolean().nullable(),
    shortlistedDate: zod_1.z.string().nullable(),
    lastCommunication: LastCommunicationSchema.nullable(),
    caste: zod_1.z.string().nullable(),
    subcaste: zod_1.z.string().nullable(),
    __typename: zod_1.z.literal("Profile").nullable(),
});
exports.KvmResponseSchema = zod_1.z.object({
    data: zod_1.z.object({
        allMatches: zod_1.z.object({
            count: zod_1.z.number(),
            profiles: zod_1.z.array(ProfileSchema),
            __typename: zod_1.z.literal("ListingResult"),
        }),
    }),
});

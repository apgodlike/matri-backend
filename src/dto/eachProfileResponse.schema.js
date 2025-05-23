"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EachProfileResponseSchema = void 0;
const zod_1 = require("zod");
const PartnerPreferenceSchema = zod_1.z.object({
    partnerDescription: zod_1.z.string(),
    __typename: zod_1.z.literal("PartnerPreference"),
});
const ReligiousInfoSchema = zod_1.z.object({
    religion: zod_1.z.string(),
    gothram: zod_1.z.string().nullable(),
    birthTime: zod_1.z.string(),
    birthDate: zod_1.z.string(),
    star: zod_1.z.string().nullable(),
    raasi: zod_1.z.string().nullable(),
    __typename: zod_1.z.literal("ReligiousInfo"),
});
const FamilyInfoSchema = zod_1.z.object({
    familyDescription: zod_1.z.string(),
    __typename: zod_1.z.literal("FamilyInfo"),
});
const CommunicationInfoSchema = zod_1.z.object({
    content: zod_1.z.string().nullable(),
    likeExpiresIn: zod_1.z.any().nullable(),
    type: zod_1.z.string(),
    time: zod_1.z.string().nullable(),
    readStatus: zod_1.z.any().nullable(),
    __typename: zod_1.z.literal("CommunicationInfo"),
});
const HealthInfoSchema = zod_1.z.object({
    drinking: zod_1.z.string().nullable(),
    eating: zod_1.z.string().nullable(),
    physicalStatus: zod_1.z.string().nullable(),
    smoking: zod_1.z.string().nullable(),
    weight: zod_1.z.number(),
    bodyType: zod_1.z.string().nullable(),
    __typename: zod_1.z.literal("HealthInfo"),
});
const LocationSchema = zod_1.z.object({
    city: zod_1.z.string().nullable(),
    state: zod_1.z.string().nullable(),
    country: zod_1.z.string().nullable(),
    __typename: zod_1.z.literal("Location").nullable(),
});
const LifestyleInfoSchema = zod_1.z.object({
    food: zod_1.z.array(zod_1.z.string()),
    language: zod_1.z.array(zod_1.z.string()),
    movies: zod_1.z.array(zod_1.z.string()),
    music: zod_1.z.array(zod_1.z.string()),
    reading: zod_1.z.array(zod_1.z.string()),
    sports: zod_1.z.array(zod_1.z.string()),
    __typename: zod_1.z.literal("LifestyleInfo"),
});
const BadgeInfoSchema = zod_1.z.object({
    idVerificationType: zod_1.z.string().nullable(),
    isEducationVerified: zod_1.z.boolean(),
    isIncomeVerified: zod_1.z.boolean(),
    isPhoneVerified: zod_1.z.boolean(),
    __typename: zod_1.z.literal("BadgeInfo"),
});
const ViewProfileSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    horoscopeType: zod_1.z.string().nullable(),
    lastActiveTime: zod_1.z.string().nullable(),
    photo: zod_1.z.string().nullable(),
    otherPhotos: zod_1.z.array(zod_1.z.string()),
    profileStatus: zod_1.z.string().nullable(),
    totalCommunicationCount: zod_1.z.number().nullable(),
    missedCallCount: zod_1.z.number().nullable(),
    missedCallDate: zod_1.z.string().nullable(),
    phoneNumber: zod_1.z.string().nullable(),
    phoneNumberViewedDate: zod_1.z.string().nullable(),
    aboutMe: zod_1.z.string().nullable(),
    photoVisibility: zod_1.z.string().nullable(),
    phoneVisibility: zod_1.z.string().nullable(),
    graduation: zod_1.z.string().nullable(),
    postGraduation: zod_1.z.string().nullable(),
    specialisation: zod_1.z.string().nullable(),
    superSpecialisation: zod_1.z.string().nullable(),
    partnerPreference: PartnerPreferenceSchema,
    religious: ReligiousInfoSchema,
    horoscopeScore: zod_1.z.number().nullable(),
    family: FamilyInfoSchema,
    isIdVerified: zod_1.z.boolean().nullable(),
    onlineStatus: zod_1.z.string().nullable(),
    shortlistedDate: zod_1.z.string().nullable(),
    isAssisted: zod_1.z.boolean().nullable(),
    isBlockedYou: zod_1.z.boolean().nullable(),
    isBlockedByYou: zod_1.z.boolean().nullable(),
    isIgnoredByYou: zod_1.z.boolean().nullable(),
    gender: zod_1.z.string().nullable(),
    maritalStatus: zod_1.z.string().nullable(),
    noOfChildren: zod_1.z.number().nullable(),
    maskedPhoneNumber: zod_1.z.string().nullable(),
    childrenLivingStatus: zod_1.z.any().nullable(),
    organization: zod_1.z.string().nullable(),
    institution: zod_1.z.string().nullable(),
    lastCommunication: CommunicationInfoSchema,
    profileCreatedBy: zod_1.z.string(),
    employment: zod_1.z.string().nullable(),
    residentStatus: zod_1.z.string().nullable(),
    requestsReceived: zod_1.z.array(zod_1.z.any()).nullable(),
    requestsSent: zod_1.z.array(zod_1.z.any()).nullable(),
    citizenship: zod_1.z.string().nullable(),
    occupation: zod_1.z.string().nullable(),
    health: HealthInfoSchema,
    isShortlistedByYou: zod_1.z.boolean().nullable(),
    photoCount: zod_1.z.number().nullable(),
    isPhotoVerified: zod_1.z.boolean().nullable(),
    profileVideoPreview: zod_1.z.any().nullable(),
    ageMonth: zod_1.z.number().nullable(),
    ageYear: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).nullable(), // sometimes number, sometimes string
    height: zod_1.z.string().nullable(),
    caste: zod_1.z.string().nullable(),
    casteNoBar: zod_1.z.boolean().nullable(),
    casteOthers: zod_1.z.string().nullable(),
    isPaid: zod_1.z.boolean().nullable(),
    subcaste: zod_1.z.string().nullable(),
    subcasteOthers: zod_1.z.string().nullable(),
    education: zod_1.z.string().nullable(),
    location: LocationSchema.nullable(),
    income: zod_1.z.string().nullable(),
    incomeOther: zod_1.z.any().nullable(),
    hasShortlistedYou: zod_1.z.boolean().nullable(),
    hasViewedYou: zod_1.z.boolean().nullable(),
    commonHobbies: LifestyleInfoSchema.nullable(),
    motherTongue: zod_1.z.string().nullable(),
    spokenLanguage: zod_1.z.array(zod_1.z.string()).nullable(),
    badge: BadgeInfoSchema.nullable(),
    __typename: zod_1.z.literal("ProfileFull").nullable(),
});
exports.EachProfileResponseSchema = zod_1.z.object({
    data: zod_1.z.object({
        viewProfile: ViewProfileSchema,
    }),
});

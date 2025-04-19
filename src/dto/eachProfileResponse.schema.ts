import { z } from "zod";

const PartnerPreferenceSchema = z.object({
  partnerDescription: z.string(),
  __typename: z.literal("PartnerPreference"),
});

const ReligiousInfoSchema = z.object({
  religion: z.string(),
  gothram: z.string().nullable(),
  birthTime: z.string(),
  birthDate: z.string(),
  star: z.string().nullable(),
  raasi: z.string().nullable(),
  __typename: z.literal("ReligiousInfo"),
});

const FamilyInfoSchema = z.object({
  familyDescription: z.string(),
  __typename: z.literal("FamilyInfo"),
});

const CommunicationInfoSchema = z.object({
  content: z.string().nullable(),
  likeExpiresIn: z.any().nullable(),
  type: z.string(),
  time: z.string().nullable(),
  readStatus: z.any().nullable(),
  __typename: z.literal("CommunicationInfo"),
});

const HealthInfoSchema = z.object({
  drinking: z.string().nullable(),
  eating: z.string().nullable(),
  physicalStatus: z.string().nullable(),
  smoking: z.string().nullable(),
  weight: z.number(),
  bodyType: z.string().nullable(),
  __typename: z.literal("HealthInfo"),
});

const LocationSchema = z.object({
  city: z.string(),
  state: z.string(),
  country: z.string(),
  __typename: z.literal("Location"),
});

const LifestyleInfoSchema = z.object({
  food: z.array(z.string()),
  language: z.array(z.string()),
  movies: z.array(z.string()),
  music: z.array(z.string()),
  reading: z.array(z.string()),
  sports: z.array(z.string()),
  __typename: z.literal("LifestyleInfo"),
});

const BadgeInfoSchema = z.object({
  idVerificationType: z.string(),
  isEducationVerified: z.boolean(),
  isIncomeVerified: z.boolean(),
  isPhoneVerified: z.boolean(),
  __typename: z.literal("BadgeInfo"),
});

const ViewProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  horoscopeType: z.string().nullable(),
  lastActiveTime: z.string(),
  photo: z.string().nullable(),
  otherPhotos: z.array(z.string()),
  profileStatus: z.string(),
  totalCommunicationCount: z.number(),
  missedCallCount: z.number().nullable(),
  missedCallDate: z.string().nullable(),
  phoneNumber: z.string(),
  phoneNumberViewedDate: z.string().nullable(),
  aboutMe: z.string().nullable(),
  photoVisibility: z.string(),
  phoneVisibility: z.string(),
  graduation: z.string().nullable(),
  postGraduation: z.string().nullable(),
  specialisation: z.string().nullable(),
  superSpecialisation: z.string().nullable(),
  partnerPreference: PartnerPreferenceSchema,
  religious: ReligiousInfoSchema,
  horoscopeScore: z.number(),
  family: FamilyInfoSchema,
  isIdVerified: z.boolean(),
  onlineStatus: z.string(),
  shortlistedDate: z.string().nullable(),
  isAssisted: z.boolean(),
  isBlockedYou: z.boolean(),
  isBlockedByYou: z.boolean(),
  isIgnoredByYou: z.boolean(),
  gender: z.string(),
  maritalStatus: z.string(),
  noOfChildren: z.number(),
  maskedPhoneNumber: z.string(),
  childrenLivingStatus: z.any().nullable(),
  organization: z.string(),
  institution: z.string(),
  lastCommunication: CommunicationInfoSchema,
  profileCreatedBy: z.string(),
  employment: z.string(),
  residentStatus: z.string(),
  requestsReceived: z.array(z.any()),
  requestsSent: z.array(z.any()),
  citizenship: z.string(),
  occupation: z.string(),
  health: HealthInfoSchema,
  isShortlistedByYou: z.boolean(),
  photoCount: z.number(),
  isPhotoVerified: z.boolean(),
  profileVideoPreview: z.any().nullable(),
  ageMonth: z.number(),
  ageYear: z.union([z.number(), z.string()]), // sometimes number, sometimes string
  height: z.string(),
  caste: z.string(),
  casteNoBar: z.boolean(),
  casteOthers: z.string(),
  isPaid: z.boolean(),
  subcaste: z.string().nullable(),
  subcasteOthers: z.string(),
  education: z.string(),
  location: LocationSchema,
  income: z.string(),
  incomeOther: z.any().nullable(),
  hasShortlistedYou: z.boolean(),
  hasViewedYou: z.boolean(),
  commonHobbies: LifestyleInfoSchema,
  motherTongue: z.string(),
  spokenLanguage: z.array(z.string()),
  badge: BadgeInfoSchema,
  __typename: z.literal("ProfileFull"),
});

export const EachProfileResponseSchema = z.object({
  data: z.object({
    viewProfile: ViewProfileSchema,
  }),
});

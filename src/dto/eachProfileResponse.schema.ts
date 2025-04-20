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
  city: z.string().nullable(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  __typename: z.literal("Location").nullable(),
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
  idVerificationType: z.string().nullable(),
  isEducationVerified: z.boolean(),
  isIncomeVerified: z.boolean(),
  isPhoneVerified: z.boolean(),
  __typename: z.literal("BadgeInfo"),
});

const ViewProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  horoscopeType: z.string().nullable(),
  lastActiveTime: z.string().nullable(),
  photo: z.string().nullable(),
  otherPhotos: z.array(z.string()),
  profileStatus: z.string().nullable(),
  totalCommunicationCount: z.number().nullable(),
  missedCallCount: z.number().nullable(),
  missedCallDate: z.string().nullable(),
  phoneNumber: z.string().nullable(),
  phoneNumberViewedDate: z.string().nullable(),
  aboutMe: z.string().nullable(),
  photoVisibility: z.string().nullable(),
  phoneVisibility: z.string().nullable(),
  graduation: z.string().nullable(),
  postGraduation: z.string().nullable(),
  specialisation: z.string().nullable(),
  superSpecialisation: z.string().nullable(),
  partnerPreference: PartnerPreferenceSchema,
  religious: ReligiousInfoSchema,
  horoscopeScore: z.number().nullable(),
  family: FamilyInfoSchema,
  isIdVerified: z.boolean().nullable(),
  onlineStatus: z.string().nullable(),
  shortlistedDate: z.string().nullable(),
  isAssisted: z.boolean().nullable(),
  isBlockedYou: z.boolean().nullable(),
  isBlockedByYou: z.boolean().nullable(),
  isIgnoredByYou: z.boolean().nullable(),
  gender: z.string().nullable(),
  maritalStatus: z.string().nullable(),
  noOfChildren: z.number().nullable(),
  maskedPhoneNumber: z.string().nullable(),
  childrenLivingStatus: z.any().nullable(),
  organization: z.string().nullable(),
  institution: z.string().nullable(),
  lastCommunication: CommunicationInfoSchema,
  profileCreatedBy: z.string(),
  employment: z.string().nullable(),
  residentStatus: z.string().nullable(),
  requestsReceived: z.array(z.any()).nullable(),
  requestsSent: z.array(z.any()).nullable(),
  citizenship: z.string().nullable(),
  occupation: z.string().nullable(),
  health: HealthInfoSchema,
  isShortlistedByYou: z.boolean().nullable(),
  photoCount: z.number().nullable(),
  isPhotoVerified: z.boolean().nullable(),
  profileVideoPreview: z.any().nullable(),
  ageMonth: z.number().nullable(),
  ageYear: z.union([z.number(), z.string()]).nullable(), // sometimes number, sometimes string
  height: z.string().nullable(),
  caste: z.string().nullable(),
  casteNoBar: z.boolean().nullable(),
  casteOthers: z.string().nullable(),
  isPaid: z.boolean().nullable(),
  subcaste: z.string().nullable(),
  subcasteOthers: z.string().nullable(),
  education: z.string().nullable(),
  location: LocationSchema.nullable(),
  income: z.string().nullable(),
  incomeOther: z.any().nullable(),
  hasShortlistedYou: z.boolean().nullable(),
  hasViewedYou: z.boolean().nullable(),
  commonHobbies: LifestyleInfoSchema.nullable(),
  motherTongue: z.string().nullable(),
  spokenLanguage: z.array(z.string()).nullable(),
  badge: BadgeInfoSchema.nullable(),
  __typename: z.literal("ProfileFull").nullable(),
});

export const EachProfileResponseSchema = z.object({
  data: z.object({
    viewProfile: ViewProfileSchema,
  }),
});

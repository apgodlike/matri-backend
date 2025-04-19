import { z } from "zod";

const LocationSchema = z.object({
  city: z.string(),
  state: z.string(),
  country: z.string(),
  __typename: z.literal("Location"),
});

const LastCommunicationSchema = z.object({
  type: z.string(),
  time: z.string(), // ISO date string
  content: z.string().nullable(),
  likeExpiresIn: z.any().nullable(), // Not enough info to type this strictly
  __typename: z.literal("CommunicationInfo"),
});

const ProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  lastActiveTime: z.string().nullable(),
  ageYear: z.number().nullable(),
  height: z.string().nullable(),
  education: z.string().nullable(),
  maritalStatus: z.string().nullable(),
  noOfChildren: z.number().nullable(),
  childrenLivingStatus: z.any().nullable(),
  occupation: z.string().nullable(),
  employedIn: z.string().nullable(),
  income: z.string().nullable(),
  location: LocationSchema,
  totalCommunicationCount: z.number(),
  superSpecialisation: z.any().nullable(),
  specialisation: z.any().nullable(),
  pgEducation: z.any().nullable(),
  educationStatus: z.any().nullable(),
  photo: z.string().nullable(),
  photoVisibility: z.string().nullable(),
  photoCount: z.number().nullable(),
  profileCreatedBy: z.string().nullable(),
  profileVideoPreview: z.any().nullable(),
  isNewlyJoined: z.boolean(),
  isShortlistedByYou: z.boolean(),
  isPaid: z.boolean(),
  viewedDate: z.string().nullable(),
  isAssisted: z.boolean(),
  isFeaturedProfile: z.boolean(),
  isPhotoVerified: z.boolean(),
  isIdVerified: z.boolean(),
  shortlistedDate: z.string().nullable(),
  lastCommunication: LastCommunicationSchema.nullable(),
  caste: z.string().nullable(),
  subcaste: z.string().nullable(),
  __typename: z.literal("Profile"),
});

export const KvmResponseSchema = z.object({
  data: z.object({
    allMatches: z.object({
      count: z.number(),
      profiles: z.array(ProfileSchema),
      __typename: z.literal("ListingResult"),
    }),
  }),
});

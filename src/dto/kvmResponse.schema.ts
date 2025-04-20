import { z } from "zod";

const LocationSchema = z.object({
  city: z.string().nullable(), // <-- fixed
  state: z.string().nullable(),
  country: z.string().nullable(),
  __typename: z.literal("Location").nullable(),
});

const LastCommunicationSchema = z.object({
  type: z.string().nullable(),
  time: z.string().nullable(), // <-- fixed
  content: z.string().nullable(),
  likeExpiresIn: z.any().nullable(), // still unknown
  __typename: z.literal("CommunicationInfo").nullable(),
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
  location: LocationSchema.nullable(),
  totalCommunicationCount: z.number().nullable(),
  superSpecialisation: z.any().nullable(),
  specialisation: z.any().nullable(),
  pgEducation: z.any().nullable(),
  educationStatus: z.any().nullable(),
  photo: z.string().nullable(),
  photoVisibility: z.string().nullable(),
  photoCount: z.number().nullable(),
  profileCreatedBy: z.string().nullable(),
  profileVideoPreview: z.any().nullable(),
  isNewlyJoined: z.boolean().nullable(),
  isShortlistedByYou: z.boolean().nullable(),
  isPaid: z.boolean().nullable(),
  viewedDate: z.string().nullable(),
  isAssisted: z.boolean().nullable(),
  isFeaturedProfile: z.boolean().nullable(),
  isPhotoVerified: z.boolean().nullable(),
  isIdVerified: z.boolean().nullable(),
  shortlistedDate: z.string().nullable(),
  lastCommunication: LastCommunicationSchema.nullable(),
  caste: z.string().nullable(),
  subcaste: z.string().nullable(),
  __typename: z.literal("Profile").nullable(),
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

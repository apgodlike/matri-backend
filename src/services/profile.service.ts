import { Profile } from "../generated/prisma";
import { prisma } from "../utils/prisma";

export const getProfiles = async (): Promise<Profile[] | null> => {
  try {
    const profiles = await prisma.profile.findMany({
      where: {
        isDeleted: false,
      },
    });
    return profiles;
  } catch (error) {
    console.log(error);
    return null;
  }
};

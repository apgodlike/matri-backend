import { Profile } from "../generated/prisma";
import { prismaInstance } from "../utils/prisma";

export const getProfiles = async (): Promise<Profile[] | null> => {
  try {
    const profiles = await prismaInstance.profile.findMany({
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

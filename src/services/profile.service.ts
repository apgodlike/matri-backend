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

interface IProfile {
  Profile: Profile;
  picture: string[];
}

interface IProfileWithPictures {
  profiles: IProfile[];
  totalPages: number;
}

export const getAllProfilesFromDb = async (
  skip: number
): Promise<IProfileWithPictures | null> => {
  try {
    const constructedProfiles: IProfile[] = [];
    const totalCount = await prismaInstance.profile.count({
      where: {
        isDeleted: false,
      },
    });
    let totalPages = 1;
    if (totalCount > 20) {
      totalPages = Math.ceil(totalCount / 20);
    }
    const profiles = await prismaInstance.profile.findMany({
      where: {
        isDeleted: false,
      },
      skip: skip,
      take: 20,
    });
    for (let i = 0; i < profiles.length; i++) {
      const profile = profiles[i];
      const pictures = await prismaInstance.picture.findMany({
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
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const shortListProfileService = async (
  profileId: string,
  shortlisted: boolean
) => {
  const profile = await prismaInstance.profile.update({
    where: {
      profileId: profileId,
    },
    data: {
      shortlisted,
    },
  });
  return profile;
};

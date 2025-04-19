import { Profile } from "../generated/prisma";
import { getEachKvmProfile, kvmApiRequest } from "./kvmApiRequest.util";
import { prisma } from "./prisma";

export const updateDb = async () => {
  const response = await kvmApiRequest(1);

  if (!response) {
    return null;
  }

  const totalCount = response.data.allMatches.count;
  const totalPages = Math.ceil(totalCount / 20);

  for (let i = 1; i <= totalPages; i++) {
    const response = await kvmApiRequest(i);

    if (!response) {
      return null;
    }

    for (let j = 0; j < response.data.allMatches.profiles.length; j++) {
      const eachProfile = await getEachKvmProfile(
        response.data.allMatches.profiles[j].id
      );

      if (
        prisma.profile.findfirst({
          where: { profileId: response.data.allMatches.profiles[j].id },
        })
      ) {
        // await prisma.secondaryProfile.create({
        //   data: {
        //     profileId: response.data.allMatches.profiles[j].id,
        //     name: response.data.allMatches.profiles[j].name,
        //     age: response.data.allMatches.profiles[j].ageYear,
        //   },
        // });
        continue;
      }

      await prisma.profile.create({
        data: {
          profileId: response.data.allMatches.profiles[j].id,
          name: response.data.allMatches.profiles[j].name,
          age: response.data.allMatches.profiles[j].ageYear,
          raasi: eachProfile.data.viewProfile.religious.raasi,
          star: eachProfile.data.viewProfile.religious.star,
          city: eachProfile.data.viewProfile.location.city,
          employment: eachProfile.data.viewProfile.employment,
        },
      });
    }
  }
};

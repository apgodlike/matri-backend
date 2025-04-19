import { getEachKvmProfile, kvmApiRequest } from "./kvmApiRequest.util";
import { prismaInstance } from "./prisma";

export const updateDb = async () => {
  try {
    const response = await kvmApiRequest(1);

    if (!response) {
      return null;
    }

    const totalCount = response.data.allMatches.count;
    const totalPages = Math.ceil(totalCount / 20);

    for (let i = 1; i <= 1; i++) {
      const response = await kvmApiRequest(i);

      if (!response) {
        return null;
      }

      for (let j = 0; j < response.data.allMatches.profiles.length; j++) {
        const eachProfile = await getEachKvmProfile(
          response.data.allMatches.profiles[j].id
        );

        if (
          await prismaInstance.profile.findFirst({
            where: { profileId: response.data.allMatches.profiles[j].id },
          })
        ) {
          // await prismaInstance.secondaryProfile.create({
          //   data: {
          //     profileId: response.data.allMatches.profiles[j].id,
          //     name: response.data.allMatches.profiles[j].name,
          //     age: response.data.allMatches.profiles[j].ageYear,
          //   },
          // });
          continue;
        }

        return await prismaInstance.profile.create({
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
  } catch (err) {
    console.log(err);
    return null;
  }
};

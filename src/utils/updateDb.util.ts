import { getEachKvmProfile, kvmApiRequest } from "./kvmApiRequest.util";
import { prismaInstance } from "./prisma";

export const updateDb = async () => {
  try {
    const response = await kvmApiRequest(1);

    if (!response) {
      return null;
    }

    const totalCount = response.data?.allMatches?.count;
    const totalPages = Math.ceil(totalCount / 20);

    for (let i = 1; i <= totalPages; i++) {
      console.log("Page: ", i);
      const response = await kvmApiRequest(i);

      if (!response) {
        return null;
      }

      for (let j = 0; j < response.data.allMatches.profiles.length; j++) {
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
        const eachProfile = await getEachKvmProfile(
          response.data.allMatches.profiles[j].id
        );

        const photos: string[] = [];
        if (eachProfile.data.viewProfile.photo) {
          photos.push(eachProfile.data.viewProfile.photo);
          console.log("photo: ", eachProfile.data.viewProfile.photo);
        }
        for (
          let k = 0;
          k < eachProfile.data.viewProfile.otherPhotos.length;
          k++
        ) {
          photos.push(eachProfile.data.viewProfile.otherPhotos[k]);
        }

        const teansRes = await prismaInstance.$transaction(async (trnx) => {
          const profileCreate = await trnx.profile.create({
            data: {
              profileId: response.data.allMatches.profiles[j].id,
              name: response.data.allMatches.profiles[j].name,
              age: response.data.allMatches.profiles[j].ageYear,
              raasi: eachProfile.data.viewProfile.religious.raasi,
              star: eachProfile.data.viewProfile.religious.star,
              city: eachProfile.data.viewProfile.location?.city,
              employment: eachProfile.data.viewProfile.employment,
              isPhoneNumberVisible:
                eachProfile.data.viewProfile.phoneVisibility === "TO_ALL_PAID",
            },
          });

          for (let k = 0; k < photos.length; k++) {
            console.log("photos: ", photos.length, " ", photos);
            await trnx.picture.create({
              data: {
                profileId: response.data.allMatches.profiles[j].id,
                url: photos[k],
              },
            });
          }
          return profileCreate;
        });
      }
    }
    return { success: true };
  } catch (err) {
    console.log(err);
    return null;
  }
};

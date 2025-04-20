import { env } from "process";
import {
  getEachKvmProfilePayload,
  kvmPayload,
} from "../public/kvmPayload.public";
import { axiosInstance } from "./axios.util";
import { KvmResponseSchema } from "../dto/kvmResponse.schema";
import { z } from "zod";
import { EachProfileResponseSchema } from "../dto/eachProfileResponse.schema";

type KvmResponse = z.infer<typeof KvmResponseSchema>;
export const kvmApiRequest = async (
  page: number
): Promise<KvmResponse | null> => {
  kvmPayload.variables.listingInput.page = page;

  const response = await axiosInstance.post(
    "https://g.communitymatrimony.com/graphql",
    kvmPayload,
    {
      headers: {
        Bearer: env.KVM_BEARER_TOKEN,
        "Content-Type": "application/json",
        loginId: env.KVM_LOGIN_ID,
        Accept: "application/json, text/plain, */*",
        AppType: "10",
        TokenId: "dfd230fd386b4069b921f6d1ef2269d77c818b51",
        Referer: "https://matches.konguvellalarmatrimony.com/",

        Src: "5a338ddafeae03c3cfcb2f6f17f66444d435b4dd",

        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "sec-ch-ua-platform": '"Windows"',
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "sec-ch-ua-mobile": "?0",
        isprimetab: "1",
      },
    }
  );

  console.log("KVM API REQUEST:");

  const parsedResponse = KvmResponseSchema.parse(response.data);

  return parsedResponse;
};

export const getEachKvmProfile = async (id: string) => {
  getEachKvmProfilePayload.variables.criteria.id = id;
  const response = await axiosInstance.post(
    "https://g.communitymatrimony.com/graphql?ViewProfile-matches~AllMatches-viewprofile-10-KON369887",
    getEachKvmProfilePayload,
    {
      headers: {
        Bearer: env.KVM_BEARER_TOKEN,
        "Content-Type": "application/json",
        loginId: env.KVM_LOGIN_ID,
        Accept: "application/json, text/plain, */*",
        AppType: "10",
        TokenId: "dfd230fd386b4069b921f6d1ef2269d77c818b51",
        Referer: "https://matches.konguvellalarmatrimony.com/",

        Src: "5a338ddafeae03c3cfcb2f6f17f66444d435b4dd",

        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
        "sec-ch-ua-platform": '"Windows"',
        "sec-ch-ua":
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        "sec-ch-ua-mobile": "?0",
        isprimetab: "1",
      },
    }
  );
  console.log("GET EACH KVM PROFILE: ", response.data);
  const parsedResponse = EachProfileResponseSchema.parse(response.data);

  return parsedResponse;
};

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
      },
    }
  );

  console.log("KVM RESPONSE", response.data);

  const parsedResponse = KvmResponseSchema.parse(response.data);

  return parsedResponse;
};

export const getEachKvmProfile = async (id: string) => {
  getEachKvmProfilePayload.variables.criteria.id = id;
  const response = await axiosInstance.post("", getEachKvmProfilePayload, {
    headers: {
      Bearer: env.KVM_BEARER_TOKEN,
      "Content-Type": "application/json",
      loginId: env.KVM_LOGIN_ID,
    },
  });
  const parsedResponse = EachProfileResponseSchema.parse(response.data);

  return parsedResponse;
};

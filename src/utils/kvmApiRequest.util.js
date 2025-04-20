"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEachKvmProfile = exports.kvmApiRequest = void 0;
const process_1 = require("process");
const kvmPayload_public_1 = require("../public/kvmPayload.public");
const axios_util_1 = require("./axios.util");
const kvmResponse_schema_1 = require("../dto/kvmResponse.schema");
const eachProfileResponse_schema_1 = require("../dto/eachProfileResponse.schema");
const kvmApiRequest = (page) => __awaiter(void 0, void 0, void 0, function* () {
    kvmPayload_public_1.kvmPayload.variables.listingInput.page = page;
    const response = yield axios_util_1.axiosInstance.post("https://g.communitymatrimony.com/graphql", kvmPayload_public_1.kvmPayload, {
        headers: {
            Bearer: process_1.env.KVM_BEARER_TOKEN,
            "Content-Type": "application/json",
            loginId: process_1.env.KVM_LOGIN_ID,
            Accept: "application/json, text/plain, */*",
            AppType: "10",
            TokenId: "dfd230fd386b4069b921f6d1ef2269d77c818b51",
            Referer: "https://matches.konguvellalarmatrimony.com/",
            Src: "5a338ddafeae03c3cfcb2f6f17f66444d435b4dd",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "sec-ch-ua-platform": '"Windows"',
            "sec-ch-ua": '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            "sec-ch-ua-mobile": "?0",
            isprimetab: "1",
        },
    });
    console.log("KVM API REQUEST:");
    const parsedResponse = kvmResponse_schema_1.KvmResponseSchema.parse(response.data);
    return parsedResponse;
});
exports.kvmApiRequest = kvmApiRequest;
const getEachKvmProfile = (id) => __awaiter(void 0, void 0, void 0, function* () {
    kvmPayload_public_1.getEachKvmProfilePayload.variables.criteria.id = id;
    const response = yield axios_util_1.axiosInstance.post("https://g.communitymatrimony.com/graphql?ViewProfile-matches~AllMatches-viewprofile-10-KON369887", kvmPayload_public_1.getEachKvmProfilePayload, {
        headers: {
            Bearer: process_1.env.KVM_BEARER_TOKEN,
            "Content-Type": "application/json",
            loginId: process_1.env.KVM_LOGIN_ID,
            Accept: "application/json, text/plain, */*",
            AppType: "10",
            TokenId: "dfd230fd386b4069b921f6d1ef2269d77c818b51",
            Referer: "https://matches.konguvellalarmatrimony.com/",
            Src: "5a338ddafeae03c3cfcb2f6f17f66444d435b4dd",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
            "sec-ch-ua-platform": '"Windows"',
            "sec-ch-ua": '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            "sec-ch-ua-mobile": "?0",
            isprimetab: "1",
        },
    });
    console.log("GET EACH KVM PROFILE: ", response.data);
    const parsedResponse = eachProfileResponse_schema_1.EachProfileResponseSchema.parse(response.data);
    return parsedResponse;
});
exports.getEachKvmProfile = getEachKvmProfile;

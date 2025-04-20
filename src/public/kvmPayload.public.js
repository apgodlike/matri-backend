"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEachKvmProfilePayload = exports.kvmPayload = void 0;
exports.kvmPayload = {
    operationName: "getMatchesByType",
    variables: {
        listingInput: {
            id: "KON369887",
            page: 1,
            isPrime: true,
            criteria: { isRefine: false },
            resultsCount: 20,
        },
    },
    query: "query getMatchesByType($listingInput: ListingInput!) {\n  allMatches(criteria: $listingInput) {\n    count\n    profiles {\n      id\n      name\n      lastActiveTime\n      ageYear\n      height\n      education\n      maritalStatus\n      noOfChildren\n      childrenLivingStatus\n      occupation\n      employedIn\n      income\n      location {\n        city\n        state\n        country\n        __typename\n      }\n      totalCommunicationCount\n      superSpecialisation\n      specialisation\n      pgEducation\n      educationStatus\n      photo(size: MEDIUM)\n      photoVisibility\n      photoCount\n      profileCreatedBy\n      profileVideoPreview\n      isNewlyJoined\n      isShortlistedByYou\n      isPaid\n      viewedDate\n      isAssisted\n      isFeaturedProfile\n      isPhotoVerified\n      isIdVerified\n      shortlistedDate\n      lastCommunication {\n        type\n        time\n        content\n        likeExpiresIn\n        __typename\n      }\n      caste\n      subcaste\n      __typename\n    }\n    __typename\n  }\n}",
};
exports.getEachKvmProfilePayload = {
    operationName: "ViewProfile",
    variables: {
        criteria: { id: "KON397803", viewerId: "KON369887" },
        queryString: "ViewProfile-matches~AllMatches-viewprofile-10-KON369887",
    },
    query: "query ViewProfile($criteria: ProfileInput!) {\n  viewProfile(profile: $criteria) {\n    id\n    name\n    horoscopeType\n    lastActiveTime\n    photo\n    otherPhotos\n    profileStatus\n    totalCommunicationCount\n    missedCallCount\n    missedCallDate\n    phoneNumber\n    phoneNumberViewedDate\n    aboutMe\n    photoVisibility\n    phoneVisibility\n    graduation\n    postGraduation\n    specialisation\n    superSpecialisation\n    partnerPreference {\n      partnerDescription\n      __typename\n    }\n    religious {\n      religion\n      gothram\n      birthTime\n      birthDate\n      star\n      raasi\n      __typename\n    }\n    horoscopeScore\n    family {\n      familyDescription\n      __typename\n    }\n    isIdVerified\n    onlineStatus\n    shortlistedDate\n    isAssisted\n    isBlockedYou\n    isBlockedByYou\n    isIgnoredByYou\n    gender\n    maritalStatus\n    noOfChildren\n    maskedPhoneNumber\n    horoscopeScore\n    childrenLivingStatus\n    organization\n    institution\n    lastCommunication {\n      content\n      likeExpiresIn\n      type\n      time\n      readStatus\n      __typename\n    }\n    profileCreatedBy\n    employment\n    residentStatus\n    requestsReceived {\n      status\n      type\n      __typename\n    }\n    requestsSent {\n      status\n      type\n      __typename\n    }\n    citizenship\n    occupation\n    health {\n      drinking\n      eating\n      physicalStatus\n      smoking\n      weight\n      bodyType\n      __typename\n    }\n    isShortlistedByYou\n    photoCount\n    isPhotoVerified\n    profileVideoPreview\n    ageMonth\n    ageYear\n    height\n    caste\n    casteNoBar\n    casteOthers\n    isPaid\n    subcaste\n    subcasteOthers\n    education\n    location {\n      city\n      country\n      state\n      __typename\n    }\n    income\n    incomeOther\n    hasShortlistedYou\n    hasViewedYou\n    commonHobbies {\n      food\n      language\n      movies\n      music\n      reading\n      sports\n      __typename\n    }\n    motherTongue\n    spokenLanguage\n    badge {\n      idVerificationType\n      isEducationVerified\n      isIncomeVerified\n      isPhoneVerified\n      __typename\n    }\n    __typename\n  }\n}",
};

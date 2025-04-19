-- CreateEnum
CREATE TYPE "ProfileStatus" AS ENUM ('active', 'inactive');

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "isPhoneNumberVisible" BOOLEAN NOT NULL DEFAULT false,
    "phoneNumber" TEXT,
    "age" INTEGER,
    "activeTime" TIMESTAMP(3),
    "profileStatus" "ProfileStatus",
    "raasi" TEXT,
    "star" TEXT,
    "employment" TEXT,
    "city" TEXT,
    "shortlisted" BOOLEAN,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SecondaryProfile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "isPhoneNumberVisible" BOOLEAN NOT NULL DEFAULT false,
    "phoneNumber" TEXT,
    "age" INTEGER,
    "activeTime" TIMESTAMP(3),
    "profileStatus" "ProfileStatus",
    "raasi" TEXT,
    "star" TEXT,
    "employment" TEXT,
    "city" TEXT,

    CONSTRAINT "SecondaryProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Picture" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Picture_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_profileId_key" ON "Profile"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "SecondaryProfile_profileId_key" ON "SecondaryProfile"("profileId");

-- AddForeignKey
ALTER TABLE "SecondaryProfile" ADD CONSTRAINT "SecondaryProfile_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

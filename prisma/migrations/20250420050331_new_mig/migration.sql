-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_profileId_fkey";

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("profileId") ON DELETE RESTRICT ON UPDATE CASCADE;

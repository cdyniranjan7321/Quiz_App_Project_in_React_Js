/*
  Warnings:

  - You are about to drop the column `giftyOption2` on the `QuestionAnswer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "QuestionAnswer" DROP COLUMN "giftyOption2",
ADD COLUMN     "fiftyOption2" TEXT;

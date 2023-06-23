/*
  Warnings:

  - The primary key for the `QuestionAnswer` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "QuestionAnswer_id_roundId_key";

-- AlterTable
ALTER TABLE "QuestionAnswer" DROP CONSTRAINT "QuestionAnswer_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ADD CONSTRAINT "QuestionAnswer_pkey" PRIMARY KEY ("id", "roundId");
DROP SEQUENCE "QuestionAnswer_id_seq";

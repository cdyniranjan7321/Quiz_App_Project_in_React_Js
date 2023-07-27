/*
  Warnings:

  - Added the required column `qid` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qroundId` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "qid" INTEGER NOT NULL,
ADD COLUMN     "qroundId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_qid_qroundId_fkey" FOREIGN KEY ("qid", "qroundId") REFERENCES "QuestionAnswer"("id", "roundId") ON DELETE RESTRICT ON UPDATE CASCADE;

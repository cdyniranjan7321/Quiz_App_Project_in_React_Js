/*
  Warnings:

  - A unique constraint covering the columns `[id,roundId]` on the table `QuestionAnswer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "QuestionAnswer_id_roundId_key" ON "QuestionAnswer"("id", "roundId");

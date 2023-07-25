/*
  Warnings:

  - A unique constraint covering the columns `[teamName]` on the table `Teams` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE teams_id_seq;
ALTER TABLE "Teams" ALTER COLUMN "id" SET DEFAULT nextval('teams_id_seq');
ALTER SEQUENCE teams_id_seq OWNED BY "Teams"."id";

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "roundId" INTEGER NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Score_roundId_teamName_key" ON "Score"("roundId", "teamName");

-- CreateIndex
CREATE UNIQUE INDEX "Teams_teamName_key" ON "Teams"("teamName");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_teamName_fkey" FOREIGN KEY ("teamName") REFERENCES "Teams"("teamName") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

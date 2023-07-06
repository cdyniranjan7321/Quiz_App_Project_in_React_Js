-- AlterTable
ALTER TABLE "QuestionAnswer" ADD COLUMN     "correctOption" INTEGER;

-- CreateTable
CREATE TABLE "Teams" (
    "id" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL,
    "gameOrder" INTEGER NOT NULL,

    CONSTRAINT "Teams_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "Teams" ADD COLUMN     "teamAnswers" JSONB[] DEFAULT ARRAY[]::JSONB[];

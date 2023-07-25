-- AlterTable
ALTER TABLE "QuestionAnswer" ADD COLUMN     "teamAnswers" JSONB[] DEFAULT ARRAY[]::JSONB[];

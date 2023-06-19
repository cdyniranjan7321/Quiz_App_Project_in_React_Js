/*
  Warnings:

  - You are about to drop the column `Answer` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `FiftyOption1` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `FiftyOption2` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `Font` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `IsAsked` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `Option1` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `Option2` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `Option3` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `Option4` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `Question` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `Resource` on the `QuestionAnswer` table. All the data in the column will be lost.
  - You are about to drop the column `ResourceType` on the `QuestionAnswer` table. All the data in the column will be lost.
  - Added the required column `answer` to the `QuestionAnswer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `QuestionAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuestionAnswer" DROP COLUMN "Answer",
DROP COLUMN "FiftyOption1",
DROP COLUMN "FiftyOption2",
DROP COLUMN "Font",
DROP COLUMN "IsAsked",
DROP COLUMN "Option1",
DROP COLUMN "Option2",
DROP COLUMN "Option3",
DROP COLUMN "Option4",
DROP COLUMN "Question",
DROP COLUMN "Resource",
DROP COLUMN "ResourceType",
ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "fiftyOption1" TEXT,
ADD COLUMN     "font" TEXT NOT NULL DEFAULT 'English',
ADD COLUMN     "giftyOption2" TEXT,
ADD COLUMN     "isAsked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "option1" TEXT,
ADD COLUMN     "option2" TEXT,
ADD COLUMN     "option3" TEXT,
ADD COLUMN     "option4" TEXT,
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "resource" TEXT,
ADD COLUMN     "resourceType" TEXT;

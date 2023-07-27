-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_teamName_fkey";

-- DropIndex
DROP INDEX "Score_roundId_teamName_key";

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_id_fkey" FOREIGN KEY ("id") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

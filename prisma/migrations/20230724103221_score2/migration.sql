/*
  Warnings:

  - Added the required column `tid` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_id_fkey";

-- AlterTable
ALTER TABLE "Score" ADD COLUMN     "tid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_tid_fkey" FOREIGN KEY ("tid") REFERENCES "Teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

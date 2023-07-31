/*
  Warnings:

  - The primary key for the `Teams` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Teams` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_tid_fkey";

-- AlterTable
ALTER TABLE "Teams" DROP CONSTRAINT "Teams_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Teams_pkey" PRIMARY KEY ("gameOrder");

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_tid_fkey" FOREIGN KEY ("tid") REFERENCES "Teams"("gameOrder") ON DELETE RESTRICT ON UPDATE CASCADE;

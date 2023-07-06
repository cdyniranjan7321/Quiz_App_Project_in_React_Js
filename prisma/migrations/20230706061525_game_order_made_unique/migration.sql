/*
  Warnings:

  - A unique constraint covering the columns `[gameOrder]` on the table `Teams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Teams_gameOrder_key" ON "Teams"("gameOrder");

-- CreateTable
CREATE TABLE "Round" (
    "id" SERIAL NOT NULL,
    "roundname" TEXT NOT NULL,
    "totalquestions" INTEGER NOT NULL,
    "scorefirst" INTEGER NOT NULL DEFAULT 10,
    "scoresecond" INTEGER NOT NULL DEFAULT 5,
    "scorethird" INTEGER NOT NULL DEFAULT 3,
    "scoreother" INTEGER NOT NULL DEFAULT 3,
    "scorenegative" INTEGER NOT NULL DEFAULT 0,
    "tomass" BOOLEAN NOT NULL DEFAULT false,
    "tonextteam" BOOLEAN NOT NULL DEFAULT false,
    "timefirst" INTEGER NOT NULL DEFAULT 30,
    "timesecond" INTEGER NOT NULL DEFAULT 20,
    "timethird" INTEGER NOT NULL DEFAULT 15,
    "hassubcategory" BOOLEAN NOT NULL DEFAULT false,
    "issubcategory" BOOLEAN NOT NULL DEFAULT false,
    "parentroundid" INTEGER,
    "ischoosen" BOOLEAN NOT NULL DEFAULT false,
    "issubcategoryonlyonce" BOOLEAN NOT NULL DEFAULT false,
    "israpidfire" BOOLEAN NOT NULL DEFAULT false,
    "isestimation" BOOLEAN NOT NULL DEFAULT false,
    "isbuzzer" BOOLEAN NOT NULL DEFAULT false,
    "isgambling" BOOLEAN NOT NULL DEFAULT false,
    "istiebreaker" BOOLEAN NOT NULL DEFAULT false,
    "isoption" BOOLEAN NOT NULL DEFAULT false,
    "isfiftyfifty" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Round_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionAnswer" (
    "id" SERIAL NOT NULL,
    "Question" TEXT NOT NULL,
    "Answer" TEXT NOT NULL,
    "IsAsked" BOOLEAN NOT NULL DEFAULT false,
    "ResourceType" TEXT,
    "Resource" TEXT,
    "Font" TEXT NOT NULL DEFAULT 'English',
    "Option1" TEXT,
    "Option2" TEXT,
    "Option3" TEXT,
    "Option4" TEXT,
    "FiftyOption1" TEXT,
    "FiftyOption2" TEXT,
    "roundId" INTEGER NOT NULL,

    CONSTRAINT "QuestionAnswer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "QuestionAnswer" ADD CONSTRAINT "QuestionAnswer_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

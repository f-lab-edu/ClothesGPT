-- CreateEnum
CREATE TYPE "ChoiceComponentType" AS ENUM ('Chat', 'Button', 'Image', 'Color', 'Input');

-- CreateEnum
CREATE TYPE "InputType" AS ENUM ('Number');

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "tag" JSONB,
    "choiceType" "ChoiceComponentType" NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Choice" (
    "id" TEXT NOT NULL,
    "imageSrc" TEXT,
    "color" TEXT,
    "value" JSONB,
    "tag" JSONB,
    "questionId" TEXT NOT NULL,
    "inputType" "InputType",

    CONSTRAINT "Choice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

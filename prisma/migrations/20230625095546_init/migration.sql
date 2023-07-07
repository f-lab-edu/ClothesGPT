-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,
    "createdById" INTEGER NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chatRoom" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR(250) NOT NULL,
    "createdById" INTEGER NOT NULL,

    CONSTRAINT "chatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chatGptChat" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "chatRoomId" INTEGER NOT NULL,

    CONSTRAINT "chatGptChat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "survey" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "survey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "choice" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "surveyId" INTEGER NOT NULL,

    CONSTRAINT "choice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answer" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "surveyId" INTEGER NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_answerTochoice" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_answerTochoice_AB_unique" ON "_answerTochoice"("A", "B");

-- CreateIndex
CREATE INDEX "_answerTochoice_B_index" ON "_answerTochoice"("B");

-- AddForeignKey
ALTER TABLE "chat" ADD CONSTRAINT "chat_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chatRoom" ADD CONSTRAINT "chatRoom_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chatGptChat" ADD CONSTRAINT "chatGptChat_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "chatRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "choice" ADD CONSTRAINT "choice_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_answerTochoice" ADD CONSTRAINT "_answerTochoice_A_fkey" FOREIGN KEY ("A") REFERENCES "answer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_answerTochoice" ADD CONSTRAINT "_answerTochoice_B_fkey" FOREIGN KEY ("B") REFERENCES "choice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

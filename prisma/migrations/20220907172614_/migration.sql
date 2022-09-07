-- CreateEnum
CREATE TYPE "cardTypes" AS ENUM ('debit', 'credit', 'both');

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "number" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "securityCode" INTEGER NOT NULL,
    "expirationDate" VARCHAR(5) NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "type" "cardTypes" NOT NULL,
    "tittle" VARCHAR(50) NOT NULL,

    CONSTRAINT "cards_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tittle" TEXT NOT NULL,

    CONSTRAINT "credentials_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "securityNotes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "text" VARCHAR(1000) NOT NULL,
    "tittle" VARCHAR(50) NOT NULL,

    CONSTRAINT "securityNotes_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wifi" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "password" TEXT NOT NULL,
    "tittle" VARCHAR(50) NOT NULL,

    CONSTRAINT "wifi_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "public.cards_number_key" ON "cards"("number");

-- CreateIndex
CREATE UNIQUE INDEX "public.users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "securityNotes" ADD CONSTRAINT "securityNotes_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

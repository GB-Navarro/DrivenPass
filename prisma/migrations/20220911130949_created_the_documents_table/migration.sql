-- CreateEnum
CREATE TYPE "documentTypes" AS ENUM ('RG', 'CNH');

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "documentTypes" NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "emissionDate" VARCHAR(10) NOT NULL,
    "validate" VARCHAR(10) NOT NULL,
    "registrationNumber" VARCHAR(50) NOT NULL,
    "issuer" VARCHAR(50) NOT NULL,

    CONSTRAINT "documents_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

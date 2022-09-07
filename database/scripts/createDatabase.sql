CREATE TABLE "public.users" (
	"id" serial NOT NULL,
	"email" VARCHAR(50) NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.credentials" (
	"id" serial NOT NULL,
	"userId" int NOT NULL,
	"url" TEXT NOT NULL,
	"username" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"tittle" TEXT NOT NULL,
	CONSTRAINT "credentials_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.securityNotes" (
	"id" serial NOT NULL,
	"userId" int NOT NULL,
	"text" VARCHAR(1000) NOT NULL,
	"tittle" VARCHAR(50) NOT NULL,
	CONSTRAINT "securityNotes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TYPE "cardTypes" AS ENUM ('debit', 'credit', 'both');



CREATE TABLE "public.cards" (
	"id" serial NOT NULL,
	"userId" int NOT NULL,
	"number" TEXT NOT NULL UNIQUE,
	"name" VARCHAR(50) NOT NULL,
	"securityCode" int NOT NULL,
	"expirationDate" VARCHAR(5) NOT NULL,
	"password" TEXT NOT NULL,
	"isVirtual" bool NOT NULL,
	"type" "cardTypes" NOT NULL,
	"tittle" VARCHAR(50) NOT NULL,
	CONSTRAINT "cards_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.wifi" (
	"id" serial NOT NULL,
	"userId" int NOT NULL,
	"name" VARCHAR(50) NOT NULL,
	"password" TEXT NOT NULL,
	"tittle" VARCHAR(50) NOT NULL,
	CONSTRAINT "wifi_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "public.credentials" ADD CONSTRAINT "credentials_fk0" FOREIGN KEY ("userId") REFERENCES "public.users"("id");

ALTER TABLE "public.securityNotes" ADD CONSTRAINT "securityNotes_fk0" FOREIGN KEY ("userId") REFERENCES "public.users"("id");

ALTER TABLE "public.cards" ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("userId") REFERENCES "public.users"("id");

ALTER TABLE "public.wifi" ADD CONSTRAINT "wifi_fk0" FOREIGN KEY ("userId") REFERENCES "public.users"("id");

ALTER TABLE "public.users" RENAME TO users;

ALTER TABLE "public.cards" RENAME TO cards;

ALTER TABLE "public.credentials" RENAME TO credentials;

ALTER TABLE "public.securityNotes" RENAME TO "securityNotes";

ALTER TABLE "public.wifi" RENAME TO "wifi";







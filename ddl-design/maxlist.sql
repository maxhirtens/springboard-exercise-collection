-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

DROP DATABASE IF EXISTS maxlist;

CREATE DATABASE maxlist;

\c maxlist;

CREATE TABLE "Region" (
    "RegionID" SERIAL   NOT NULL,
    "name" text   NOT NULL,
    CONSTRAINT "pk_Region" PRIMARY KEY (
        "RegionID"
     )
);

CREATE TABLE "User" (
    "UserID" Serial   NOT NULL,
    "preferred_region" int   NOT NULL,
    "username" text   NOT NULL,
    CONSTRAINT "pk_User" PRIMARY KEY (
        "UserID"
     ),
    CONSTRAINT "uc_User_username" UNIQUE (
        "username"
    )
);

CREATE TABLE "Post" (
    "PostID" Serial   NOT NULL,
    "title" text   NOT NULL,
    "text" text   NOT NULL,
    "category" int   NOT NULL,
    "location" int   NOT NULL,
    "user" int   NOT NULL,
    CONSTRAINT "pk_Post" PRIMARY KEY (
        "PostID"
     )
);

CREATE TABLE "Categories" (
    "CategoryID" Serial   NOT NULL,
    "name" text   NOT NULL,
    CONSTRAINT "pk_Categories" PRIMARY KEY (
        "CategoryID"
     )
);

ALTER TABLE "User" ADD CONSTRAINT "fk_User_preferred_region" FOREIGN KEY("preferred_region")
REFERENCES "Region" ("RegionID");

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_category" FOREIGN KEY("category")
REFERENCES "Categories" ("CategoryID");

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_location" FOREIGN KEY("location")
REFERENCES "Region" ("RegionID");

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_user" FOREIGN KEY("user")
REFERENCES "User" ("UserID");

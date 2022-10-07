-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.
DROP DATABASE IF EXISTS soccerteam;

CREATE DATABASE soccerteam;

\c soccerteam;


CREATE TABLE "teams" (
    "teamid" int   NOT NULL,
    "name" text   NOT NULL,
    CONSTRAINT "pk_teams" PRIMARY KEY (
        "teamid"
     )
);

CREATE TABLE "goals" (
    "goalsid" int   NOT NULL,
    "match" int   NOT NULL,
    "player" int   NOT NULL,
    CONSTRAINT "pk_goals" PRIMARY KEY (
        "goalsid"
     )
);

CREATE TABLE "players" (
    "playerid" int   NOT NULL,
    "name" text   NOT NULL,
    "team" int   NOT NULL,
    CONSTRAINT "pk_players" PRIMARY KEY (
        "playerid"
     )
);

CREATE TABLE "referees" (
    "refid" int   NOT NULL,
    "name" text   NOT NULL,
    CONSTRAINT "pk_referees" PRIMARY KEY (
        "refid"
     )
);

CREATE TABLE "matches" (
    "matchid" int   NOT NULL,
    "team1" int   NOT NULL,
    "team2" int   NOT NULL,
    "referee" int   NOT NULL,
    CONSTRAINT "pk_matches" PRIMARY KEY (
        "matchid"
     )
);

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_match" FOREIGN KEY("match")
REFERENCES "matches" ("matchid");

ALTER TABLE "goals" ADD CONSTRAINT "fk_goals_player" FOREIGN KEY("player")
REFERENCES "players" ("playerid");

ALTER TABLE "players" ADD CONSTRAINT "fk_players_team" FOREIGN KEY("team")
REFERENCES "teams" ("teamid");

ALTER TABLE "matches" ADD CONSTRAINT "fk_matches_team1" FOREIGN KEY("team1")
REFERENCES "teams" ("teamid");

ALTER TABLE "matches" ADD CONSTRAINT "fk_matches_team2" FOREIGN KEY("team2")
REFERENCES "teams" ("teamid");

ALTER TABLE "matches" ADD CONSTRAINT "fk_matches_referee" FOREIGN KEY("referee")
REFERENCES "referees" ("refid");

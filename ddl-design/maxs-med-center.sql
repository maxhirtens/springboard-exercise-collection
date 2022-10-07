-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center;

CREATE TABLE "Doctors" (
    "DoctorID" Serial   NOT NULL,
    "name" text   NOT NULL,
    "specialty" text   NOT NULL,
    CONSTRAINT "pk_Doctors" PRIMARY KEY (
        "DoctorID"
     )
);

CREATE TABLE "Patients" (
    "PatientID" Serial   NOT NULL,
    "name" text   NOT NULL,
    CONSTRAINT "pk_Patients" PRIMARY KEY (
        "PatientID"
     )
);

CREATE TABLE "Diseases" (
    "DiseaseID" Serial   NOT NULL,
    "name" text   NOT NULL,
    CONSTRAINT "pk_Diseases" PRIMARY KEY (
        "DiseaseID"
     )
);

CREATE TABLE "Diagnoses" (
    "DiagnosisID" Serial   NOT NULL,
    "Disease" text   NOT NULL,
    CONSTRAINT "pk_Diagnoses" INT PRIMARY KEY (
        "DiagnosisID"
     )
);

CREATE TABLE "Visits" (
    "VisitID" Serial   NOT NULL,
    "Doctor" text   NOT NULL,
    "Patient" text   NOT NULL,
    "Diagnosis" text   NOT NULL,
    CONSTRAINT "pk_Visits" PRIMARY KEY (
        "VisitID"
     )
);

ALTER TABLE "Diagnoses" ADD CONSTRAINT "fk_Diagnoses_Disease" FOREIGN KEY("Disease")
REFERENCES "Diseases" ("DiseaseID");

ALTER TABLE "Visits" ADD CONSTRAINT "fk_Visits_Doctor" FOREIGN KEY("Doctor")
REFERENCES "Doctors" ("DoctorID");

ALTER TABLE "Visits" ADD CONSTRAINT "fk_Visits_Patient" FOREIGN KEY("Patient")
REFERENCES "Patients" ("PatientID");

ALTER TABLE "Visits" ADD CONSTRAINT "fk_Visits_Diagnosis" FOREIGN KEY("Diagnosis")
REFERENCES "Diagnoses" ("DiagnosisID");

INSERT INTO Diseases (name)
VALUES
('croup')
('whooping cough')
('rabies');

INSERT INTO Doctors (name, specialty)
VALUES
('Dr. Bob', 'GI')
('Dr. Susan', 'Pediatrics');

INSERT INTO Patients (name)
VALUES
('Toby')
('Stefan');

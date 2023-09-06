/*
  Warnings:

  - Added the required column `title` to the `academic_faculty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "academic_faculty" ADD COLUMN     "title" TEXT NOT NULL;

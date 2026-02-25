/*
  Warnings:

  - The primary key for the `clients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `clients` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `shopping_centers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `shopping_centers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `client_id` on the `shopping_centers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `client_id` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "shopping_centers" DROP CONSTRAINT "shopping_centers_client_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_client_id_fkey";

-- AlterTable
ALTER TABLE "clients" DROP CONSTRAINT "clients_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "clients_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "shopping_centers" DROP CONSTRAINT "shopping_centers_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "client_id",
ADD COLUMN     "client_id" INTEGER NOT NULL,
ADD CONSTRAINT "shopping_centers_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "client_id",
ADD COLUMN     "client_id" INTEGER NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_centers" ADD CONSTRAINT "shopping_centers_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

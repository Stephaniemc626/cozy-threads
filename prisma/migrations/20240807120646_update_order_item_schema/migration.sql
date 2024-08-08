/*
  Warnings:

  - You are about to drop the column `totalPrice` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `cardInfo` on the `User` table. All the data in the column will be lost.
  - Added the required column `total` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sizeId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `name` on the `Size` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SizeEnum" AS ENUM ('S', 'M', 'L', 'XL', 'ONE_SIZE');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "totalPrice",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "sizeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "quantity",
ADD COLUMN     "total" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "name",
ADD COLUMN     "name" "SizeEnum" NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "cardInfo";

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

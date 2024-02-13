/*
  Warnings:

  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `tag` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "size",
DROP COLUMN "tag",
ADD COLUMN     "sizes" "Size"[] DEFAULT ARRAY[]::"Size"[],
ADD COLUMN     "tags" TEXT[] DEFAULT ARRAY[]::TEXT[];

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { listingId } = event.context.params;

    const deleteCar = prisma.car.delete({
        where: {
            id: parseInt(listingId)
        }
    });

    return deleteCar;
    
});
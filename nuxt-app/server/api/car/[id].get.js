import cars from "@/data/cars.json";

// car/[car-name]-[id]
export default defineEventHandler((event) => {
    const { id } = event.context.params;

    const car = cars.find(c => {
        return c.id === parseInt(id);
    });

    if (!car) {
        throw createError({
            statusCode: 404,
            message: `Car with ID of ${id} does not exist`
        })
    }

    return car;
});
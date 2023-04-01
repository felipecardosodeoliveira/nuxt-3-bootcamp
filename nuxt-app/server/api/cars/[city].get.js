import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
    const { city } = event.context.params;
    const { make, minPrice, maxPrice } = getQuery(event);
    let filteredCars = cars.filter((car) => car.city.toLowerCase() === city.toLowerCase());

    if (make) {
        filteredCars = filteredCars.filter((car) => car.make.toLocaleLowerCase() === make.toLocaleLowerCase());
    }

    if (minPrice) {
        filteredCars = filteredCars.filter((car) => car.price >= parseFloat(minPrice));
    }

    if (maxPrice) {
        filteredCars = filteredCars.filter((car) => car.price <= parseFloat(maxPrice));
    }

    return filteredCars;

});
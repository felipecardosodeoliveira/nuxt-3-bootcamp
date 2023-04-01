import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number()
        .min(1886)
        .max(new Date().getFullYear() + 1).required(),
    miles: Joi.number().required().min(0),
    city: Joi.string().min(2).required(),
    description: Joi.string().min(3).required(),
    numberOfSeats: Joi.number().max(1000).min(1).required(),
    features: Joi.array().items(Joi.string().required()),
    image: Joi.string().required(),
    listerId: Joi.string().required(),
    price: Joi.number().min(0).required(),
    name: Joi.string().required()
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        await schema.validateAsync(body);

        const {
            name,
            make,
            model,
            year,
            miles,
            city,
            description,
            numberOfSeats,
            features,
            image,
            listerId,
            price,
        } = body;

        const Car = await prisma.car.create({
            data: {
                name,
                make,
                model,
                year,
                miles: parseInt(miles),
                city: city.toLowerCase(),
                description,
                numberOfSeats,
                features,
                image,
                listerId,
                price: parseInt(price),
            }
        });

        return { Car };

    } catch (error) {
        return {
            statusCode: 412,
            statusMessage: error.message
        }
    }

});
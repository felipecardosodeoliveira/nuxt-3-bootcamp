import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    year: Joi.number()
        .min(1886)
        .max(new Date().getFullYear() + 1),
    miles: Joi.number().required().min(0),
    city: Joi.string().min(2).required(),
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
        const value = await schema.validateAsync(body);
        const Car = await prisma.car.create({ value });
        return { value };

    } catch (error) {
        return {
            statusCode: 412,
            statusMessage: error.message
        }
    }

});
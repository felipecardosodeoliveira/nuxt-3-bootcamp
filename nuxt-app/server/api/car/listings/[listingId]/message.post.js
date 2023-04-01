import Joi from "joi";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"]}
    }),
    phone: Joi.string().length(10).pattern(/^[0-9]/).required(),
    message: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { listingId } = event.context.params;

    try {
        await schema.validateAsync(body);

        const {
            name,
            email,
            phone,
            message,
        } = body;

        const Message = await prisma.message.create({
            data: {
                name,
                email,
                phone,
                message,
                listingId: parseInt(listingId)
            }
        });

        return { Message };

    } catch (error) {
        return {
            statusCode: 412,
            statusMessage: error.message
        }
    }

});
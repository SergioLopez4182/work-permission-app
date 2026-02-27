import Joi, { ObjectSchema } from "joi";
import { CreateShoppingCenterDTO } from "./shopping-center.types";

export const shoppingCenterSchema: ObjectSchema<CreateShoppingCenterDTO> =
    Joi.object({
        name: Joi.string().min(3).max(150).required(),
        clientId: Joi.number().min(0).required(),
    });
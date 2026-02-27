import { validateSchema, ValidationResult } from "@/lib/validate";
import { CreateShoppingCenterDTO } from "./shopping-center.types";
import { shoppingCenterSchema } from "./shopping-center.schema";

export class ShoppingCenterSerializer {
    static create(
        data: unknown
    ): ValidationResult<CreateShoppingCenterDTO> {
        return validateSchema<CreateShoppingCenterDTO>(
            shoppingCenterSchema,
            data
        );
    }
}
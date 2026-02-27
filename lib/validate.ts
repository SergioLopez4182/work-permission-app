import { ObjectSchema, ValidationError } from "joi";

export interface ValidationResult<T> {
    error?: ValidationError;
    value?: T;
}

export const validateSchema = <T>(
    schema: ObjectSchema<T>,
    data: unknown
): ValidationResult<T> => {
    const { error, value } = schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
    });

    if (error) {
        return { error };
    }

    return { value: value as T };
};
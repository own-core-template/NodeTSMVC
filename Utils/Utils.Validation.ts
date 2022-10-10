import Joi from "joi";

export const validateInput = (schema: Joi.ObjectSchema<any>, input: any) => {
  const { value, warning, error } = schema.validate(input);
  return error === null;
};

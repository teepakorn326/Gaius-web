import Joi from "joi";

const roomSchema = Joi.object({
  projectName: Joi.string().required(),
  rentalPrice: Joi.string().required(),
  depositPrice: Joi.string().required(),
  advancePayment: Joi.string().required(),
  type: Joi.string().required(),
  size: Joi.string().required(),
  unitType: Joi.string().required(),
  floor: Joi.string().required(),
  building: Joi.string().required(),
  province: Joi.string().required(),
  district: Joi.string().required(),
  subDistrict: Joi.string().required(),
  postCode: Joi.string().required(),
  mapUrl: Joi.string().required(),
  plusCode: Joi.string().required(),

  description: Joi.string().required(),
  file: Joi.required(),
});

export const validateRoom = (input) =>
  roomSchema.validate(input, { abortEarly: false });

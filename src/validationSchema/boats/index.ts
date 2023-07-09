import * as yup from 'yup';

export const boatValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  availability: yup.boolean().required(),
  platform_id: yup.string().nullable(),
});

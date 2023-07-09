import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  status: yup.string().required(),
  boat_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});

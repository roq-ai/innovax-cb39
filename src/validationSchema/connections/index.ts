import * as yup from 'yup';

export const connectionValidationSchema = yup.object().shape({
  organization_id: yup.string().nullable(),
  startup_id: yup.string().nullable(),
});

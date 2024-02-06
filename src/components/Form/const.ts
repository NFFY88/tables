import * as z from 'zod'

export const validationSchema = z.object({
  name: z
    .string()
    .min(1, 'Required field')
    .regex(/^([^0-9]*)$/, 'The name should not contain numbers'),
  surname: z
    .string()
    .min(1, 'Required field')
    .regex(/^([^0-9]*)$/, 'The surname should not contain numbers'),
  age: z
    .number({
      required_error: 'Age is required',
      invalid_type_error: 'Age must be a number',
    })
    .positive('Age must be greater than 0')
    .max(150, 'Too old'),
  city: z.object({
    label: z.string(),
    value: z.string(),
  }),
})

export const defaultFormValues = {
  name: undefined,
  surname: undefined,
  age: undefined,
  city: null,
}

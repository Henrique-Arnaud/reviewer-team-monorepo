import { z } from 'zod'

export const registerFormSchema = z
  .object({
    email: z.string().nonempty('E-mail is required').email('Insert a valid e-mail'),
    username: z
      .string()
      .nonempty('Username is required')
      .min(6, 'Username must have at least 6 characters'),
    password: z
      .string()
      .nonempty('Password is required')
      .min(6, 'Password must have at least 6 characters'),
    confirmPassword: z.string().nonempty('Password confirmation is required'),
    above16Confirmation: z.number().refine((value) => value !== 1, 'This field is required'),
  })
  .refine(async (data) => data.password !== data.confirmPassword, {
    message: 'Passwords must be the same',
    path: ['confirmPassword'],
  })

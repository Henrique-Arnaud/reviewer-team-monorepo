import z from 'zod'
import { loginFormSchema } from '../_schemas'

export type loginFormDataType = z.infer<typeof loginFormSchema>

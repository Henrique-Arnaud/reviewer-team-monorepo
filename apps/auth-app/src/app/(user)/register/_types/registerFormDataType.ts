import z from 'zod'
import { registerFormSchema } from '../_schemas'

export type registerFormDataType = z.infer<typeof registerFormSchema>

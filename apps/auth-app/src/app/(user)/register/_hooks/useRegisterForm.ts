'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from '../_schemas'
import { registerFormDataType } from '../_types'

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormDataType>({ resolver: zodResolver(registerFormSchema) })

  const onSubmit: SubmitHandler<registerFormDataType> = (data) => console.log(data)

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginFormSchema } from '../_schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormDataType } from '../_types'

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormDataType>({ resolver: zodResolver(loginFormSchema) })

  const onSubmit: SubmitHandler<loginFormDataType> = (data) => console.log(data)

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginFormSchema } from '../_schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormDataType } from '../_types'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormDataType>({ resolver: zodResolver(loginFormSchema) })

  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<loginFormDataType> = async (data) => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      alert(await response.json())
      router.push('/dashboard')
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Erro ao logar')
    } finally {
      setIsLoading(false)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
  }
}

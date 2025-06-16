'use client'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerFormSchema } from '../_schemas'
import { registerFormDataType } from '../_types'
import { useRouter } from 'next/navigation'

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerFormDataType>({ resolver: zodResolver(registerFormSchema) })

  const router = useRouter()

  const onSubmit: SubmitHandler<registerFormDataType> = async (data) => {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const data = await res.json()
        alert(data)
        return
      }

      console.log('Login successful')
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      alert(err)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  }
}

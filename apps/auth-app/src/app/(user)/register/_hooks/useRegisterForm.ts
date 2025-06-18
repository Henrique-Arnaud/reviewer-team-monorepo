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
    setValue,
    formState: { errors },
  } = useForm<registerFormDataType>({ resolver: zodResolver(registerFormSchema) })

  const router = useRouter()

  const onSubmit: SubmitHandler<registerFormDataType> = async (data) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {confirmPassword, ...registerFields} = data
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerFields),
      })

      if (!res.ok) {
        const data = await res.json()
        alert(data)
        return
      }

      console.log('register successful')
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
    setValue,
    onSubmit,
  }
}

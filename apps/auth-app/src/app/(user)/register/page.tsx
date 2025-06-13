'use client'
import Input from '@/app/_components/input'
import React from 'react'
import { useRegisterForm } from './_hooks'
import { AtSymbolIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Register() {
  const { register, errors, handleSubmit, onSubmit } = useRegisterForm()
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
  }
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'linear', delay: 0.2 }}
      className="flex flex-col w-11/12 ml-auto mr-auto mt-16 mb-36 pl-6 pr-6 pt-8 pb-8 bg-gray-900"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <Input
            {...register('username')}
            labelText="Username"
            errorMessage={errors.username?.message}
            type="text"
            Icon={UserIcon}
          />
          <Input
            {...register('email')}
            labelText="E-mail"
            errorMessage={errors.email?.message}
            type="text"
            Icon={AtSymbolIcon}
          />
          <Input
            {...register('password')}
            labelText="Password"
            errorMessage={errors.password?.message}
            type="password"
            Icon={LockClosedIcon}
          />
          <Input
            {...register('confirmPassword')}
            labelText="Confirm Password"
            errorMessage={errors.confirmPassword?.message}
            type="password"
            Icon={LockClosedIcon}
          />
          <div className="flex gap-4">
            <input type="checkbox" value={0} className="scale-150" />
            <span>I&apos;m at least 16 years old and accept the storage of my data</span>
          </div>
          <span className="text-red-500 mt-0.5">{errors.above16Confirmation?.message}</span>
        </div>
        <button
          className="h-12 w-full mt-6 bg-emerald-800 rounded-lg transition-colors duration-500 active:bg-blue-500"
          type="submit"
        >
          Create account
        </button>
      </form>
    </motion.main>
  )
}

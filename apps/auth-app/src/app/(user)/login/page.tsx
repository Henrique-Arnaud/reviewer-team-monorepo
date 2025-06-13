'use client'
import Input from '@/app/_components/input'
import React from 'react'
import { useLoginForm } from './_hooks'
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Login() {
  const { register, errors, handleSubmit, onSubmit } = useLoginForm()
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
  }
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: 'linear' }}
      className="flex flex-col w-full mt-26 mb-36 pl-6 pr-6"
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
            {...register('password')}
            labelText="Password"
            errorMessage={errors.password?.message}
            type="password"
            Icon={LockClosedIcon}
          />
        </div>
        <button className="h-12 w-full mt-6 bg-emerald-800 rounded-lg transition-colors duration-500 active:bg-gray-800" type="submit">
          Submit
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <Link href="/register" className="text-emerald-400 underline active:text-blue-500">
          Create account
        </Link>
        <Link href="/register" className="text-emerald-400 underline active:text-blue-500">
          Forgot your password?
        </Link>
      </div>
    </motion.main>
  )
}

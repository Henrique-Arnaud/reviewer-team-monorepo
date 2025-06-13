import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  errorMessage?: string
  Icon?: React.ElementType
}

export default function Input({ labelText, errorMessage, Icon, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {labelText && (
        <label htmlFor={props.id} className="text-sm text-green-400">
          {labelText}
        </label>
      )}
      <div className="relative flex items-center ">
        {Icon && (
          <Icon
            aria-hidden
            width={24}
            height={24}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 text-gray-500"
          />
        )}
        <input
          aria-label={labelText}
          autoComplete="off"
          className={`w-full h-11 pl-9 pr-1.5 bg-[#E7F0FE] text-black rounded-lg ${
            errorMessage ? 'border-red-600 border-1 border-solid' : ''
          }`}
          {...props}
        />
      </div>

      <span className="text-red-500 mt-0.5">{errorMessage}</span>
    </div>
  )
}

'use client'

import { useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function CaptchaForm({ children }: { children: React.ReactNode }) {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!recaptchaRef || !recaptchaRef.current) return

    const captchaToken = recaptchaRef.current.getValue()

    if (!captchaToken) {
      return
    }
    // const res = await fetch('/api/verify-captcha', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ token: captchaToken }),
    // })

    // const data = await res.json()
    // if (data.success) {
    //   alert('CAPTCHA verified, proceed!')
    // } else {
    //   alert('CAPTCHA verification failed.')
    // }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex-col">
      {children}


      <div className="w-fit ml-auto mr-auto mt-6 mb-6">
        <ReCAPTCHA
          sitekey={SITE_KEY}
          ref={recaptchaRef}
          onChange={(token) => {
            console.log('Captcha token:', token)
          }}
          theme="dark"
        />
      </div>
    </form>
  )
}

function getEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Environment variable ${key} is required but was not provided`)
  }
  return value
}

export const env = {
  JWT_SECRET: getEnvVar('JWT_SECRET'),
  DATABASE_URL: getEnvVar('DATABASE_URL'),
  REVIEWER_MODE_URL: getEnvVar('REVIEWER_MODE_URL'),
  SESSION_COOKIES_DOMAIN: getEnvVar('SESSION_COOKIES_DOMAIN')
}

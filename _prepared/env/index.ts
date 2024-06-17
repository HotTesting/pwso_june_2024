import { cleanEnv, str, url } from 'envalid'

export const env = cleanEnv(process.env, {
  FRONTEND_URL: url(),
  API_URL: url(),
  DB_KEY: str(),
})

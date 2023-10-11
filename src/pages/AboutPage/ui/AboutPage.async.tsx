import { lazy } from 'react'

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))

export const AboutPageAsync = lazy(async () => {
  await delay(1500)
  return await import('./AboutPage')
})

export const stratzApiToken = assertValue(
  process.env.NEXT_PUBLIC_STRATZ_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_STRATZ_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

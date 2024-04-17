import { BASE_URL } from '@/util/constants'

export const getBooks = async () => {
  try {
    const res = await fetch(`${BASE_URL}/books`)

    if (!res.ok) {
      throw new Error('Failed to fetch books')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

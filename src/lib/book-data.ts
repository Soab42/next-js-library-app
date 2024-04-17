import { Book } from '@/interfaces'
import { BASE_URL } from '@/util/constants'
import { z } from 'zod'

const URL = `${BASE_URL}/books`

export const getBooks = async () => {
  try {
    const res = await fetch(URL, { next: { tags: ['books'] } })

    if (!res.ok) {
      throw new Error('Failed to fetch books')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const addBook = async (data: Book) => {
  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    console.log(res)
    if (!res.ok) {
      throw new Error('Failed to add book')
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

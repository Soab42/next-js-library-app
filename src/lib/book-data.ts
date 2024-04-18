import revalidate from '@/app/actions'
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
export const getBook = async (id: string) => {
  try {
    const res = await fetch(`${URL}/${id}`)

    if (!res.ok) {
      throw new Error('Failed to fetch book')
    }

    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const bookInputSchema = z.object({
  book_name: z.string().nonempty('Book Name is missing'),
  author_name: z.string().nonempty('Author Name is missing'),
  book_type: z.enum([
    'Novel',
    'Poem',
    'Story',
    'Science Fiction',
    'Comic',
    'Mathematics',
  ]),
  book_language: z.string().nonempty('Book Language is missing'),
  book_publisher: z.string().nonempty('Book Publisher is missing'),
  book_price: z.number(),
  entry_date: z.string().nonempty('Entry Date is missing'),
})

export const addBook = async (prevState: any, data: FormData) => {
  try {
    const bookData = Object.fromEntries(data)

    const validatedFields = bookInputSchema.safeParse({
      ...bookData,
      book_price: Number(bookData.book_price),
    })
    console.log('🚀 ~ submitForm ~ validatedFields:', validatedFields)

    if (!validatedFields.success) {
      const error = {
        errors: validatedFields.error.flatten().fieldErrors,
      }

      return error
    } else {
      const res = await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedFields.data),
      })

      if (!res.ok) {
        throw new Error('Failed to add book')
      }
      return res.json().then(() => revalidate('books'))
    }
  } catch (error) {
    console.log(error)
  }
}

export const deleteBook = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/books/${id}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error('Failed to delete book')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export const updateBook = async (id: string, data: Book) => {
  try {
    const res = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error('Failed to update book')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

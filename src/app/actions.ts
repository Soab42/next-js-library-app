'use server'

import { addBook } from '@/lib/book-data'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'

export default async function revalidate(tag: string) {
  revalidateTag(tag)
}

const bookInputSchema = z.object({
  book_name: z.string(),
  author_name: z.string(),
  book_type: z.enum([
    'Novel',
    'Poem',
    'Story',
    'Science Fiction',
    'Comic',
    'Mathematics',
  ]),
  book_language: z.string(),
  book_publisher: z.string(),
  book_price: z.number(),
  entry_date: z.string(),
})

export const submitForm = async (prevState: any, formData: FormData) => {
  console.log('🚀 ~ submitForm ~ prevState:', prevState)
  const bookData = Object.fromEntries(formData)

  const validatedFields = bookInputSchema.safeParse({
    ...bookData,
    book_price: Number(bookData.book_price),
  })

  if (!validatedFields.success) {
    console.log(22222)
    const error = {
      errors: validatedFields.error.flatten().fieldErrors,
    }

    return error
  } else {
    await addBook(bookData as any)
    revalidateTag('books')
  }
}

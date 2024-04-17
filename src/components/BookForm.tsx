import { addBook } from '@/lib/book-data'
import { formElements, options } from '@/util/constants'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'
import BookTypeSelector from './BookTypeSelector'
import FormRow from './FormRow'

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

const BookForm = () => {
  const submitForm = async (formData: FormData) => {
    'use server'

    const bookData = Object.fromEntries(formData)

    const validatedFields = bookInputSchema.safeParse({
      ...bookData,
      book_price: Number(bookData.book_price),
    })

    if (!validatedFields.success) {
      const error = {
        errors: validatedFields.error.flatten().fieldErrors,
      }

      return error
    } else {
      await addBook(bookData as any)
      revalidateTag('books')
    }
  }

  return (
    <form className='mt-6 flex flex-col gap-4' action={submitForm}>
      {formElements.map((el) => {
        if (el === 'Book Type') {
          return <BookTypeSelector key='book type' options={options} />
        } else if (el === 'Entry Date') {
          return (
            <div key='date' className='flex gap-2 items-center'>
              <label className='w-32' htmlFor='entry_date'>
                Entry Date:
              </label>
              <input
                className='outline outline-blue-500 rounded-md p-2 w-80 outline-1'
                type='date'
                id='entry_date'
                name='entry_date'
              ></input>
            </div>
          )
        } else {
          return <FormRow key={el} title={el} />
        }
      })}
      <button type='submit' className='btn-outline btn-primary btn'>
        Add Book
      </button>
    </form>
  )
}
export default BookForm

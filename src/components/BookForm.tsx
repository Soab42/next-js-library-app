'use client'
import { Book } from '@/interfaces'
import { addBook, editBook } from '@/lib/book-data'
import { formElements, options } from '@/util/constants'
import { motion } from 'framer'
import { useFormState } from 'react-dom'
import BookTypeSelector from './BookTypeSelector'
import FormRow from './FormRow'

const initialState = {
  errors: '',
}

const BookForm = ({ book }: { book?: Book }) => {
  const bookEditing = !!book
  const editBookWithId = editBook.bind(null, book?._id!)

  // @ts-ignore
  const [state, formAction] = useFormState(addBook, initialState)

  return (
    <form
      className={`mt-6 flex flex-col gap-4 ${
        bookEditing ? 'items-center' : ''
      }`}
      action={bookEditing ? editBookWithId : formAction}
    >
      {formElements.map((el) => {
        if (el === 'Book Type') {
          return (
            <div key='book type'>
              <BookTypeSelector book={book} options={options} />
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -300 }}
                transition={{ delay: 0.5 }}
                className='text-end text-red-500 text-sm mt-2'
              >
                {state?.errors['book_type']}
              </motion.p>
            </div>
          )
        } else if (el === 'Entry Date') {
          return (
            <div key='date' className='flex flex-col'>
              <div className='flex gap-2 items-center'>
                <label className='w-32' htmlFor='entry_date'>
                  Entry Date:
                </label>
                <input
                  defaultValue={book?.entry_date?.split('T')[0]}
                  className={`outline outline-blue-500 rounded-md ${
                    bookEditing ? 'w-[40rem]' : 'w-full max-w-xs'
                  } p-2 outline-1`}
                  type='date'
                  id='entry_date'
                  name='entry_date'
                ></input>
              </div>
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -300 }}
                transition={{ delay: 0.5 }}
                className='text-end text-red-500 text-sm mt-2'
              >
                {state?.errors['entry_date']}
              </motion.p>
            </div>
          )
        } else {
          return (
            <FormRow errors={state?.errors} book={book} key={el} title={el} />
          )
        }
      })}

      <button type='submit' className='btn-outline btn-primary btn'>
        {bookEditing ? 'Edit' : 'Add'} Book
      </button>
    </form>
  )
}
export default BookForm

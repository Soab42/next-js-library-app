'use client'
import { Book } from '@/interfaces'
import { addBook, editBook } from '@/lib/book-data'
import { formElements, options } from '@/util/constants'
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
            <BookTypeSelector book={book} key='book type' options={options} />
          )
        } else if (el === 'Entry Date') {
          return (
            <div key='date' className='flex gap-2 items-center'>
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
          )
        } else {
          return <FormRow book={book} key={el} title={el} />
        }
      })}
      {/* mapping the errors */}
      {state?.errors && (
        <p className='text-red-500 font-bold text-sm relative max-w-[25rem]'>
          <span className='underline underline-offset-4'>Errors</span>:{' '}
          {Object.values(state?.errors)
            .map((err: any) => {
              return err[0]
            })
            .join(', ')}
        </p>
      )}
      <button type='submit' className='btn-outline btn-primary btn'>
        {bookEditing ? 'Edit' : 'Add'} Book
      </button>
    </form>
  )
}
export default BookForm

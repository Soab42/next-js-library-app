'use client'
import { submitForm } from '@/app/actions'
import { addBook } from '@/lib/book-data'
import { formElements, options } from '@/util/constants'
import { useFormState } from 'react-dom'
import BookTypeSelector from './BookTypeSelector'
import FormRow from './FormRow'

const initialState = {
  errors: '',
}

const BookForm = () => {
  const [state, formAction] = useFormState(submitForm, initialState)

  console.log(state)

  return (
    <form className='mt-6 flex flex-col gap-4' action={formAction}>
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
      <p>{}</p>
      <button type='submit' className='btn-outline btn-primary btn'>
        Add Book
      </button>
    </form>
  )
}
export default BookForm

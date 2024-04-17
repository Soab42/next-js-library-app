import { formElements, options } from '@/util/constants'
import BookTypeSelector from './BookTypeSelector'
import Buttons from './Buttons'
import FormRow from './FormRow'

const BookForm = () => {
  const submitForm = async (formData: FormData) => {
    'use server'
    const rawFormData = Object.fromEntries(formData)

    console.log(rawFormData)
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
      <Buttons />
    </form>
  )
}
export default BookForm

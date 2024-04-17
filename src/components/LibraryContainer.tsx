import BookTypeSelector from './BookTypeSelector'
import FormRow from './FormRow'
import Library from './Library'

const formElements = [
  'Book Name',
  'Author Name',
  'Book Type',
  'Book Language',
  'Book Publisher',
  'Book Price',
  'Entry Date',
]

const buttons = ['add', 'update', 'search', 'delete', 'display', 'close']

const LibraryContainer = () => {
  return (
    <div className='h-[40rem] w-[60rem] shadow-md rounded-md p-10'>
      <h1 className='text-3xl font-bold'>LIBRARY MANAGEMENT SYSTEM</h1>
      <div className='flex justify-between'>
        <form className='mt-6 flex flex-col gap-4' action=''>
          {formElements.map((el) => {
            if (el === 'Book Type') {
              return <BookTypeSelector />
            } else if (el === 'Entry Date') {
              return (
                <div className='flex gap-2 items-center'>
                  <label htmlFor='birthday'>Entry Date:</label>
                  <input type='date' id='birthday' name='birthday'></input>
                </div>
              )
            } else {
              return <FormRow title={el} />
            }
          })}
        </form>
        <div>
          <Library />
        </div>
      </div>
      <div className='mt-12 flex gap-4'>
        {buttons.map((btn) => (
          <button className='btn btn-outline btn-primary capitalize'>
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}
export default LibraryContainer

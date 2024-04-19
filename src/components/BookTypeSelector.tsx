import { Book } from '@/interfaces'

const BookTypeSelector = ({
  options,
  book,
}: {
  options: string[]
  book?: Book
}) => {
  const bookEditing = !!book

  return (
    <div className='flex gap-2 items-center'>
      <label className='w-32' htmlFor='Book type'>
        Book Type
      </label>
      <select
        defaultValue={book?.book_type}
        name='book_type'
        className={`select ${
          bookEditing ? 'w-[40rem]' : 'w-full'
        } select-primary w-full *:bg-white-500`}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
export default BookTypeSelector

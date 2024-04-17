const BookTypeSelector = ({ options }: { options: string[] }) => {
  return (
    <div className='flex gap-2 items-center'>
      <label className='w-32' htmlFor='Book type'>
        Book Type
      </label>
      <select
        name='book_type'
        className='select select-primary w-full max-w-xs *:bg-white-500'
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
export default BookTypeSelector

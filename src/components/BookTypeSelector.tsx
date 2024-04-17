const BookTypeSelector = ({ options }: { options: string[] }) => {
  return (
    <div className='flex gap-2 items-center'>
      <label className='w-32' htmlFor='Book type'>
        Book Type
      </label>
      <select className='select select-primary w-full max-w-xs *:bg-white-500'>
        <option disabled selected>
          Select Book Type
        </option>
        <option>Game of Thrones</option>
        <option>Lost</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </select>
    </div>
  )
}
export default BookTypeSelector

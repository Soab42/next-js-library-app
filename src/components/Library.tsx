import { getBooks } from '@/lib/book-data'
import Books from './Books'
import SearchInput from './SearchInput'

const Library = async () => {
  const data = await getBooks()
console.log(data);
  return (
    <div className='h-96 mt-6 p-2 flex flex-col overflow-auto gap-2 w-[23rem] rounded-md bg-green-300'>
      <h1 className='border-b-black border-b font-semibold'>Books</h1>
      <SearchInput />
      <Books books={data?.books} />
    </div>
  )
}
export default Library

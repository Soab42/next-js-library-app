import { Book } from '@/interfaces'
import { getBooks } from '@/lib/book-data'
import BookItem from './BookItem'

const Library = async () => {
  const { data } = await getBooks()

  return (
    <div className='h-96 mt-6 p-2 flex flex-col overflow-auto gap-2 w-[23rem] rounded-md bg-green-300'>
      {data.map((book: Book) => (
        <BookItem book={book} key={book._id} />
      ))}
    </div>
  )
}
export default Library

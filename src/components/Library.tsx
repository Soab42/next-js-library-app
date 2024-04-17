import { Book } from '@/interfaces'
import { getBooks } from '@/lib/book-data'
import BookItem from './BookItem'

const Library = async () => {
  const { data: books } = await getBooks()

  return (
    <div className='h-96 mt-6 p-2 flex flex-col overflow-auto gap-2 w-[23rem] rounded-md bg-green-300'>
      <h1 className='border-b-black border-b font-semibold'>Books</h1>
      {books.map((book: Book, index: number) => (
        <BookItem book={book} key={book._id} index={index} />
      ))}
      <div id='scroll-to-here'></div>
    </div>
  )
}
export default Library

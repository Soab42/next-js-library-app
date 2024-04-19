import BookCard from '@/components/BookCard'
import BookForm from '@/components/BookForm'
import { getBook } from '@/lib/book-data'
import Link from 'next/link'
import { IoArrowBack } from 'react-icons/io5'

const BookSlot = async ({ params: { id } }: { params: { id: string } }) => {
  const { book } = await getBook(id)

  return (
    <div className='h-[40rem] w-[60rem] bg-stone-100 shadow-md rounded-md p-10'>
      <h1 className='text-3xl font-bold'>LIBRARY MANAGEMENT SYSTEM</h1>
      <div className='flex justify-between'>
        <BookForm />
        <Link
          className='hover:scale-110 transition-all relative left-12 rounded-full bg-gray-500 text-white size-fit p-1'
          href='/library'
        >
          <IoArrowBack className='duration-200 text-2xl' />
        </Link>
        <div className='h-96 mt-12 p-2 flex flex-col overflow-auto gap-2 w-[23rem] rounded-md bg-green-300'>
          <BookCard book={book} />
        </div>
      </div>
    </div>
  )
}
export default BookSlot

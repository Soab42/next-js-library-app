import BookForm from '@/components/BookForm'
import { getBook } from '@/lib/book-data'

const BookSlot = async ({ params: { id } }: { params: { id: string } }) => {
  const { book } = await getBook(id)

  return (
    <div className='h-[40rem] w-[60rem] bg-stone-100 shadow-md rounded-md p-10'>
      <h1 className='text-3xl font-bold'>LIBRARY MANAGEMENT SYSTEM</h1>
      <div className='flex justify-between'>
        <BookForm />
        <div></div>
        <p>BOOK Item</p>
      </div>
    </div>
  )
}
export default BookSlot

import BookForm from '@/components/BookForm'
import { getBook } from '@/lib/book-data'

const EditSlot = async ({ params: { id } }: { params: { id: string } }) => {
  const { book } = await getBook(id)

  return (
    <div className='h-[40rem] w-[60rem] bg-stone-100 shadow-md rounded-md p-10'>
      <p className='opacity-50 text-blue-500'>Editing {book.book_name}</p>
      <BookForm book={book} />
    </div>
  )
}
export default EditSlot

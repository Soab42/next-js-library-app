import { getBook } from '@/lib/book-data'

const Book = async ({ params: { id } }: { params: { id: string } }) => {
  const { book } = await getBook(id)
  return <div>Book</div>
}
export default Book

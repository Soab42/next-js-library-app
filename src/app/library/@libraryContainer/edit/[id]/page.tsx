import { getBook } from '@/lib/book-data'

const EditSlot = async ({ params: { id } }: { params: { id: string } }) => {
  // const { book } = await getBook(id)

  // console.log(book)

  return (
    <div className='h-[40rem] w-[60rem] bg-stone-100 shadow-md rounded-md p-10'>
      Edit
    </div>
  )
}
export default EditSlot

import { Book } from '@/interfaces'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Button from './Button'

const BookCard = ({ book }: { book: Book }) => {
  const {
    _id,
    book_name,
    author_name,
    book_language,
    book_publisher,
    book_price,
    entry_date,
    book_type,
  } = book

  return (
    <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800'>
      <div className='flex items-center justify-between'>
        <span className='text-sm font-light text-gray-800 dark:text-gray-400'>
          Book Details
        </span>
        <span className='px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900'>
          {book_type}
        </span>
      </div>
      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 dark:text-white'>
          {book_name}
        </h1>
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
          <span className='font-bold'>Publisher:</span> {book_publisher}
        </p>
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
          <span className='font-bold'>Language:</span> {book_language}
        </p>
      </div>
      <div>
        <div className='flex items-center mt-2 flex-col text-gray-700 dark:text-gray-200'>
          <span>by</span>
          <div
            className='mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline'
            tabIndex={0}
            role='link'
          >
            {author_name}
          </div>
          <span>Book Price:</span>
          <div
            className='mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline'
            tabIndex={0}
            role='link'
          >
            {book_price}
          </div>
          <span>Came on:</span>
          <div
            className='mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline'
            tabIndex={0}
            role='link'
          >
            {entry_date.split('T')[0]}
          </div>
        </div>
        <div className='flex items-center justify-center mt-4 text-white gap-4'>
          <Button
            className='bg-blue-400'
            icon={<BiEdit className='text-2xl' />}
          >
            Edit
          </Button>
          <Button
            id={_id}
            className='bg-gray-400'
            icon={<MdDelete className='text-2xl' />}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
export default BookCard

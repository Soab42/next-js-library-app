'use client'
import { Book } from '@/interfaces'
import { searchBook } from '@/lib/book-data'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BiLoader } from 'react-icons/bi'
import BookItem from './BookItem'

const Books = ({ books }: { books: Book[] }) => {
  const [searchedBooks, setSearchedBooks] = useState({ data: [] })
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  useEffect(() => {
    const doSearch = async () => {
      try {
        if (search) {
          setLoading(true)
          const data = await searchBook(search)
          setSearchedBooks(data)
          setLoading(false)
        }
      } catch (error) {
        console.error('Error during search:', error)
      }
    }

    doSearch()
  }, [search])

  if (!loading && search && searchedBooks.data.length === 0) {
    return <p>No Books Found</p>
  }
  if (search && loading) {
    return (
      <div className='flex justify-center items-center min-h-60'>
        <BiLoader className='animate-spin text-xl' />
      </div>
    )
  }

  if (search && searchedBooks.data?.length > 0) {
    return searchedBooks.data.map((book: Book, index: number) => (
      <BookItem book={book} key={book._id} index={index} />
    ))
  } else {
    return books?.map((book: Book, index: number) => (
      <BookItem book={book} key={book._id} index={index} />
    ))
  }
}
export default Books

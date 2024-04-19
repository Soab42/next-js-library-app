'use client'
import { Book } from '@/interfaces'
import { searchBook } from '@/lib/book-data'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import BookItem from './BookItem'

const Books = ({ books }: { books: Book[] }) => {
  const [searchedBooks, setSearchedBooks] = useState({ data: [] })

  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  useEffect(() => {
    const doSearch = async () => {
      try {
        if (search) {
          const data = await searchBook(search)
          console.log(data)
          setSearchedBooks(data)
        }
      } catch (error) {
        console.error('Error during search:', error)
      }
    }

    doSearch()
  }, [search])

  if (search && searchedBooks.data?.length > 0) {
    return searchedBooks.data.map((book: Book, index: number) => (
      <BookItem book={book} key={book._id} index={index} />
    ))
  } else {
    return books.map((book: Book, index: number) => (
      <BookItem book={book} key={book._id} index={index} />
    ))
  }
}
export default Books

import { Book as IBook } from '@/interfaces'
import connectMongo from '@/lib/connectDb'
import Book from '@/models/book'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
  try {
    await connectMongo()
    const books = await Book.find()
    return NextResponse.json({ data: books })
  } catch (error) {
    return NextResponse.json({ error })
  }
}

export const POST = async (req: NextRequest) => {
  try {
    await connectMongo()

    const body: IBook = await req.json()

    const bookObj = {
      book_name: body.book_name,
      author_name: body.author_name,
      book_language: body.book_language,
      book_publisher: body.book_publisher,
      book_price: body.book_price,
      entry_date: body.entry_date || new Date(),
    }

    if (bookObj.book_name) {
      const book = await Book.create(bookObj)

      return NextResponse.json(
        { msg: `New Book ${book.book_name} added`, book },
        { status: 201 }
      )
    } else {
      return NextResponse.json({ msg: 'ERROR' }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}

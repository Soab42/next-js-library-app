import connectMongo from '@/lib/connectDb'
import Book from '@/models/book'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectMongo()
    const book = await Book.findById(id)
    if (book) {
      return NextResponse.json({ book })
    }
    return NextResponse.json({
      msg: `Book with id ${id} not found`,
    })
  } catch (error) {
    console.log(error)
  }
}

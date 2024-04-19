import connectMongo from '@/lib/connectDb'
import Book from '@/models/book'
import { NextResponse } from 'next/server'

export const GET = async (
  _: NextResponse,
  {
    params: { name },
  }: {
    params: { name: string }
  }
) => {
  try {
    await connectMongo()
    const regex = new RegExp(name, 'i')

    const book = await Book.find({ book_name: regex })
    return NextResponse.json({ data: book })
  } catch (error) {
    return NextResponse.json({ error })
  }
}

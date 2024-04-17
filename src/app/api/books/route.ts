import connectMongo from '@/lib/connectDb'
import Book from '@/models/book'
import { configDotenv } from 'dotenv'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  try {
    await connectMongo()
    const books = await Book.find()
    return NextResponse.json({ data: books })
  } catch (error) {
    return NextResponse.json({ error })
  }
}

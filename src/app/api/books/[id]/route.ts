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

export const DELETE = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    await connectMongo()
    const book = await Book.findByIdAndDelete(id)
    if (book) {
      return NextResponse.json({
        msg: `Book with id ${id} deleted successfully`,
      })
    }
    return NextResponse.json({
      msg: `Book with id ${id} not found`,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}

export const PUT = async (
  req: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  try {
    const body = await req.json()
    await connectMongo()
    const book = await Book.findByIdAndUpdate(id, body, { new: true })
    if (book) {
      return NextResponse.json({ book })
    }
    return NextResponse.json({
      msg: `Book with id ${id} not found`,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error }, { status: 500 })
  }
}

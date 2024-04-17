import { model, models, Schema } from 'mongoose'

const BookSchema = new Schema({
  book_name: String,
  author_name: String,
  book_type: {
    type: String,
    enum: ['Novel', 'Poem', 'Story', 'Science Fiction', 'Comic', 'Mathematics'],
  },
  book_language: String,
  book_publisher: String,
  book_price: Number,
  entry_date: {
    type: Date,
    default: Date.now,
  },
})

const Book = models.Book || model('Book', BookSchema)

export default Book

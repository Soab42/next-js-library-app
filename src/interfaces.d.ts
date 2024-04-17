export interface Book {
  _id: string
  book_name: string
  author_name: string
  book_type:
    | 'Novel'
    | 'Poem'
    | 'Story'
    | 'Science Fiction'
    | 'Comic'
    | 'Mathematics'
  book_language: string
  book_publisher: string
  book_price: number
  entry_date: String
}

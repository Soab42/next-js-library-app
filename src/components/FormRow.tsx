import { Book } from '@/interfaces'
import { motion } from 'framer'

const FormRow = ({
  title,
  book,
  errors,
}: {
  title: string
  book?: Book
  errors: any
}) => {
  const name = title.toLowerCase().split(' ').join('_')
  const value = book?.[name as keyof Book]

  const bookEditing = !!book

  return (
    <div className='flex flex-col'>
      <div className='flex gap-2 items-center'>
        <label className='w-32' htmlFor={title}>
          {title}
        </label>
        <input
          defaultValue={value as string}
          name={name}
          type={title === 'Book Price' ? 'number' : 'text'}
          placeholder={title}
          className={`input input-bordered input-primary ${
            bookEditing ? 'w-[40rem]' : 'w-full max-w-xs'
          } `}
        />
      </div>
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -300 }}
        transition={{ delay: 0.5 }}
        className='text-end text-red-500 text-sm mt-2'
      >
        {errors[name]}
      </motion.p>
    </div>
  )
}
export default FormRow

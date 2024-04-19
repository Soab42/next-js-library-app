import { Book } from '@/interfaces'

const FormRow = ({ title, book }: { title: string; book?: Book }) => {
  const value = book?.[title.toLowerCase().split(' ').join('_') as keyof Book]

  const bookEditing = !!book

  return (
    <div className='flex gap-2 items-center'>
      <label className='w-32' htmlFor={title}>
        {title}
      </label>
      <input
        defaultValue={value as string}
        name={title.toLowerCase().split(' ').join('_')}
        type={title === 'Book Price' ? 'number' : 'text'}
        placeholder={title}
        className={`input input-bordered input-primary ${
          bookEditing ? 'w-[40rem]' : 'w-full max-w-xs'
        } `}
      />
    </div>
  )
}
export default FormRow

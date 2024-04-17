const FormRow = ({ title }: { title: string }) => {
  return (
    <div className='flex gap-2 items-center'>
      <label className='w-32' htmlFor={title}>
        {title}
      </label>
      <input
        type='text'
        placeholder={title}
        className='input input-bordered input-primary w-full max-w-xs'
      />
    </div>
  )
}
export default FormRow

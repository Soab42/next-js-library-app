const buttons = ['add', 'update', 'search', 'delete']

const Buttons = () => {
  return (
    <div className='mt-6 flex gap-4'>
      {buttons.map((btn) =>
        btn === 'add' ? (
          <button
            key={btn}
            type='submit'
            className='btn btn-outline btn-primary capitalize'
          >
            {btn}
          </button>
        ) : (
          <button
            key={btn}
            type='button'
            className='btn btn-outline btn-primary capitalize'
          >
            {btn}
          </button>
        )
      )}
    </div>
  )
}
export default Buttons

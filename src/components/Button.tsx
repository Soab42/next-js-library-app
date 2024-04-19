'use client'
import revalidate from '@/app/actions'
import { deleteBook } from '@/lib/book-data'
import { motion } from 'framer'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { BiLoader, BiTrash } from 'react-icons/bi'

const Button = ({
  icon,
  children,
  className,
  operation,
  id,
}: {
  icon: ReactNode
  children: ReactNode
  className: string
  id?: string
  operation?: string
}) => {
  const [showToast, setShowToast] = useState(false)
  const router = useRouter()
  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id)
      setShowToast(true)
      setTimeout(() => {
        revalidate('books')
        router.push('/library')
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }
  return showToast && operation === 'delete' ? (
    <motion.button
      disabled={showToast && operation === 'delete'}
      className={`flex gap-2 items-center p-4 w-24 justify-center ${className} rounded-md`}
    >
      <BiLoader className='animate-spin text-2xl' />
    </motion.button>
  ) : (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className={`flex gap-2 items-center p-4 ${className} rounded-md`}
      onClick={() => operation === 'delete' && handleDelete(id as string)}
    >
      <p>{children}</p>
      {icon}
      {createPortal(
        <motion.div
          animate={{ opacity: showToast ? 1 : 0, y: showToast ? 0 : 300 }}
          initial={{ opacity: 0, y: 300 }}
          className='toast'
        >
          <div className='alert alert-error text-white'>
            <BiTrash />
            <span>Deleted Book Successfully</span>
          </div>
        </motion.div>,
        document.body
      )}
    </motion.button>
  )
}
export default Button

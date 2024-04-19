'use client'
import revalidate from '@/app/actions'
import { deleteBook } from '@/lib/book-data'
import { motion } from 'framer'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'

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
  const router = useRouter()
  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id)
      revalidate('books')
      router.push('/library')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className={`flex gap-2 items-center p-4 ${className} rounded-md`}
      onClick={() => operation === 'delete' && handleDelete(id as string)}
    >
      <p>{children}</p>
      {icon}
    </motion.button>
  )
}
export default Button

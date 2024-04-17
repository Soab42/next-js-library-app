'use client'
import { deleteBook } from '@/lib/book-data'
import { motion } from 'framer'
import { ReactNode } from 'react'

const Button = ({
  icon,
  children,
  className,
  id,
}: {
  icon: ReactNode
  children: ReactNode
  className: string
  id?: string
}) => {
  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.95 }}
      className={`flex gap-2 items-center p-4 ${className} rounded-md`}
      onClick={() => handleDelete(id as string)}
    >
      <p>{children}</p>
      {icon}
    </motion.button>
  )
}
export default Button

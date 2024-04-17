export default function LibLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  book: React.ReactNode
}>) {
  return (
    <main className='flex justify-center items-center h-[90vh]'>
      {children}
    </main>
  )
}

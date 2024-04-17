export default function RootLayout({
  children,
  libraryContainer,
}: Readonly<{
  children: React.ReactNode
  libraryContainer: React.ReactNode
}>) {
  return (
    <>
      <main className='flex justify-center items-center h-[90vh]'>
        {libraryContainer}
      </main>
      {/* {children} */}
    </>
  )
}

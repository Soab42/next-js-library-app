import LibraryContainer from '@/components/LibraryContainer'
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <main className='flex justify-center items-center h-[90vh]'>
      <LibraryContainer />
      <Toaster />
    </main>
  )
}

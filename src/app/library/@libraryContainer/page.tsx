import LibraryContainer from '@/components/LibraryContainer'
import { Suspense } from 'react'

const LibrarySlot = () => {
  return (
    <div>
      <Suspense>
        <LibraryContainer />
      </Suspense>
    </div>
  )
}
export default LibrarySlot

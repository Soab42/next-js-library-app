'use client'
import useDebounce from '@/hooks/use-debounce'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  // debounce
  const debouncedSearch = useDebounce((value: string) => {
    setSearch(value)
  }, 100)

  const handleSearchChange = (event: ChangeEvent<any>) => {
    const { value } = event.target
    debouncedSearch(value)
  }

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const q = searchParams.get('search')

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  // sync with the query param
  useEffect(() => {
    if (q) {
      setSearch(q)
    } else {
      setSearch('')
    }
  }, [q])

  // push the query string in the url
  useEffect(() => {
    if (search) {
      router.push(pathname + '?' + createQueryString('search', search))
    } else {
      router.push(pathname)
    }
  }, [search])

  return (
    <label className='input input-bordered input-accent flex items-center gap-2 p-1'>
      <input
        defaultValue={q!}
        onChange={handleSearchChange}
        type='search'
        className='grow'
        placeholder='Search'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='w-4 h-4 opacity-70'
      >
        <path
          fillRule='evenodd'
          d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
          clipRule='evenodd'
        />
      </svg>
    </label>
  )
}
export default SearchInput

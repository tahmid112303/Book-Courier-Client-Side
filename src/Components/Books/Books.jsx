import React from 'react'
import useAxios from '../../Axios/useAxios'
import { useQuery } from '@tanstack/react-query'

const Books = () => {

  const axios = useAxios()
  const {data: books = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const res = await axios.get('/books')
          return res.data
        }
      })
  
  return (
    <div>
        <h1 className='text-center font-bold text-5xl my-6'>All Books</h1>

         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-fit mx-auto'>
            {books.map(book => <div key={book._id} className="card bg-[#8ef3ee] text-black w-96 max-sm:w-80 h-auto shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={book.image}
      alt="art image"
      className="rounded-xl h-55 w-100" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-3xl">{book.bookName}</h2>
        <div className='flex flex-col gap-5 mt-10'>
            <p>Author: <span className='font-bold'>{book.author}</span></p>

            <p>Category: <span className='font-bold'>{book.category}</span></p>
        </div>
    <div className="card-actions w-full mt-10">
      <button className="btn btn-primary w-full">Details</button>
    </div>
  </div>
  </div>
  )}

    </div>
    </div>
  )
}

export default Books
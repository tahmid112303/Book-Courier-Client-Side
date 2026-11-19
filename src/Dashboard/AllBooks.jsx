import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../Axios/useAxiosSecure'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'

const AllBooks = () => {
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const {data: books = [], refetch} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await axiosSecure.get('/books');
            return res.data;
        }
    })

    const handleDeleteBook = (id) => {
          Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) 
            axiosSecure.delete(`/books/${id}`)
            .then(res => {
            if(res.data.deletedCount){
                refetch()
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
        }).catch(err => {
            console.log("An error occured: ", err)
        })
}
);



    }

      const handleUnpublishBook = (id) => {
        axiosSecure.patch(`/books/${id}/unpublish`)
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire("Book has been unpublished successfully")
                refetch()
            }
        })
      } 
    
      const handlePublishBook = (id) => {
        axiosSecure.patch(`/books/${id}/publish`)
        .then(res => {
            if(res.data.modifiedCount){
                Swal.fire({
                position: "center",
                icon: "success",
                title: "Book has been published successfully!",
                showConfirmButton: false,
                timer: 2000
        });
                refetch()
            }
        })
      }

  return (
    <>
        <h1 className='text-center text-5xl my-4'>All Books: {books.length}</h1>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-fit mx-auto'>
            {books.map(book => <div key={book._id} className="card bg-[#b1ece9] text-black w-96 max-sm:w-80 h-auto shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={book.bookImage}
      alt="art image"
      className="rounded-xl h-55 w-100" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold text-3xl">{book.bookName}</h2>
        <div className='flex flex-col gap-5 mt-10'>
            <p>Author: <span className='font-bold'>{book.authorName}</span></p>

            <p>Category: <span className='font-bold'>{book.bookCategory}</span></p>
        </div>

    <div className="card-actions w-full mt-10">
      <button onClick={()=>navigate(`/bookDetail/${book._id}`)} className="btn btn-primary w-full">Details</button>

    <div className='card-actions w-full'>

    {book.status === "unpublished" ? <button onClick={()=>handlePublishBook(book._id)} className='btn btn-neutral w-full'>
        Publish
    </button> : <button onClick={()=>handleUnpublishBook(book._id)} className='btn btn-success w-full text-white'>
        Unpublish
    </button>}

    <button onClick={() => handleDeleteBook(book._id)} className='btn btn-primary w-full'>
        Delete
    </button>
    
</div>

    </div>

  </div>
  </div>)}
        </div>
    </>
  )
}

export default AllBooks
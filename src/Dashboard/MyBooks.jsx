import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Axios/useAxiosSecure'
import useAuth from '../Hooks/useAuth'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { memo } from 'react'

const MyBooks = () => {

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {user} = useAuth();
  const {data: myBooks = [],refetch} = useQuery({
    queryKey: ['books',user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books?email=${user.email}`);
      console.log(res.data)
      return res.data;      
    }
  })

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
      <div>
          <h1 className='text-center text-5xl font-bold mt-2'>All of My Books</h1>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 w-fit mx-auto mt-10'>

              {myBooks.map(book => <div key={book._id} className="card bg-[#b1ece9] text-black w-96 max-sm:w-80 h-auto shadow-sm">
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


    <button onClick={()=>navigate(`/dashboard/editbook/${book._id}`)} className='btn btn-primary w-full'>
        Edit
    </button>
    
</div>
    </div>
  </div>
  </div>)}
  </div>

      {myBooks.length > 0 && <div className='flex justify-center font-bold mt-6 max-sm:justify-start max-sm:ml-10'>
            <button onClick={()=>navigate('/dashboard/addbook')} className='btn btn-warning text-white rounded-3xl'>Add More</button>
        </div>}
</div>
  )
}

export default memo(MyBooks)
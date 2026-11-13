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
  const {data: myBooks = [], refetch} = useQuery({
    queryKey: ['books',user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books?email=${user.email}`);
      console.log(res.data)
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
      .then(res=>{
        console.log(res.data)
        if(res.data.deletedCount){
          Swal.fire({
          title: "Deleted!",
          text: "Book has been deleted.",
          icon: "success"
      });
          refetch()
      }
      })
          
});

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
      <button className="btn btn-primary w-full">Details</button>

<div className='grid grid-cols-3 gap-4 w-fit mx-auto mt-4'>
    <button className='btn btn-primary'>
        Unpublish
    </button>

    <button onClick={()=>navigate(`/dashboard/editbook/${book._id}`)} className='btn btn-primary'>
        Edit
    </button>
    
    <button onClick={()=>handleDeleteBook(book._id)} className='btn btn-primary'>
        Delete
    </button>
</div>
    </div>
  </div>
  </div>)}
  </div>

        <div className='flex justify-center font-bold mt-6 max-sm:justify-start max-sm:ml-10'>
            <button onClick={()=>navigate('/dashboard/addbook')} className='btn btn-warning text-white rounded-3xl'>Add More</button>
        </div>
</div>
  )
}

export default memo(MyBooks)
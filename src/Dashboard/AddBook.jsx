import axios from 'axios'
import { Image } from 'lucide-react'
import React, { memo } from 'react'
import useAxiosSecure from '../Axios/useAxiosSecure'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import useAuth from '../Hooks/useAuth'

const AddBook = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth(); 

  const handlePublishBook = (e) => {
    e.preventDefault()
    const form = e.target 

    const name = user.displayName;
    const email = user.email;
    const bookName = form.bookName.value;
    const authorName = form.authorName.value;
    const bookImage = form.bookImage.files[0]
    const bookPrice = form.bookPrice.value;
    const bookCategory = form.bookCategory.value;
    const bookDescription = form.bookDescription.value;


    const formData = new FormData();
    formData.append('image',bookImage);
    const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`

    axios.post(image_API_URL,formData)
    .then(res => {
      console.log(res.data.data.url)

      const bookInfo = {
      name: name,
      email: email,
      bookName: bookName,
      authorName: authorName,
      bookImage: res.data.data.url,
      bookCategory: bookCategory,
      bookPrice: bookPrice,
      bookDescription: bookDescription
    }

    axiosSecure.post('/books', bookInfo)
    .then(res => {
      console.log(res.data)

      if(res.data.insertedId){
        Swal.fire("Book Published Successfully!");
        navigate('/dashboard/mybooks');
      }
    })

    }).catch(err => {
      console.log(err)
    })

  }


  return (
    <>
        <h1 className='text-center font-bold text-5xl mt-4'>Add Book Information</h1>

<fieldset className="fieldset bg-blue-200 border-base-300 mx-auto rounded-box w-full max-w-xl border p-6 mt-20">
    <h1 className='text-center text-4xl font-semibold mb-6'>Add Book</h1>

    <form onSubmit={handlePublishBook} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
            <label className="label mt-1 font-bold">Book Name<span className='text-red-700'>*</span></label>
            <input type="text" name='bookName' className="input w-full" placeholder="Book Name" required/>
        </div>

        <div>
            <label className="label mt-1 font-bold">Author<span className='text-red-700'>*</span></label>
            <input type="text" name='authorName' className="input w-full" placeholder="Author's Name" required/>
        </div>

        <div>
            <label className="label mt-1 font-bold">Book Image<span className='text-red-700'>*</span></label>
            <input type="file" name='bookImage' className="file-input w-full" accept="image/*" required/>
        </div>

        <div>
            <label className="label mt-1 font-bold">Category<span className='text-red-700'>*</span></label>
            <input type="text" name='bookCategory' className="input w-full" placeholder='Book Category' required/>
        </div>

        <div className='md:col-span-2'>
            <label className="label mt-1 font-bold">Price($)<span className='text-red-700'>*</span></label>
            <input type="number" name='bookPrice' className="input w-full" placeholder="Book's Price" required/>
        </div>

        <div className="md:col-span-2">
            <label className="label mt-1 font-bold">Description<span className='text-red-700'>*</span></label>
            <textarea className="textarea w-full" name='bookDescription' placeholder="A brief description of the book" required></textarea>
        </div>

        <div className="md:col-span-2">
            <button className="btn btn-neutral mt-4 w-full">Publish</button>
        </div>
    </form>
</fieldset>
    </>
  )
}

export default memo(AddBook)
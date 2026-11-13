import axios from 'axios'
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import useAxiosSecure from '../Axios/useAxiosSecure';
import Swal from 'sweetalert2';

const EditBook = () => {
const data = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const handleEditBook = (e) => {
      e.preventDefault();
      const form = e.target;

      const bookName = form.bookName.value;
      const authorName = form.authorName.value;
      const bookImage = form.bookImage.files[0];
      const bookPrice = form.bookPrice.value;
      const bookCategory = form.bookCategory.value;
      const bookDescription = form.bookDescription.value;

      const updateBookInDatabase = (imageUrl) => {
          const bookInfo = {
              bookName,
              authorName,
              bookImage: imageUrl,
              bookCategory,
              bookPrice,
              bookDescription
          };

          axiosSecure.patch(`/books/${data._id}`, bookInfo)
              .then(res => {
                  console.log(res.data);
                  if(res.data.modifiedCount){
                    Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Book has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate('/dashboard/mybooks')
                  }
              })
              .catch(err => {
                  console.error("Failed to update book:", err);
              });
      };

      // Check if a new image file was actually selected
      if (bookImage) {
          const formData = new FormData();
          formData.append('image', bookImage);
          const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

          axios.post(image_API_URL, formData)
              .then(res => {
                  updateBookInDatabase(res.data.data.url);
              })
              .catch(err => {
                  console.error("Image upload failed:", err);
              });
      } else {
          // If no new image is selected, retain the existing image URL from loader data
          updateBookInDatabase(data.bookImage);
      }
  };

  return (
    <>
      <h1 className='text-center font-bold text-5xl mt-4'>Edit Book Information</h1>

          <div>
        <fieldset className="fieldset bg-linear-to-r from-sky-300 via-blue-300 to-indigo-300 border-base-300 mx-auto rounded-box w-full max-w-xl border p-6 mt-20">
    <h1 className='text-center text-4xl font-semibold mb-6'>Edit</h1>

    <form onSubmit={handleEditBook} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
            <label className="label mt-1 font-bold">Book Name<span className='text-red-700'>*</span></label>
            <input type="text" name='bookName' className="input w-full" placeholder="Book Name" defaultValue={data.bookName}/>
        </div>

        <div>
            <label className="label mt-1 font-bold">Author<span className='text-red-700'>*</span></label>
            <input type="text" name='authorName' className="input w-full" placeholder="Author's Name" defaultValue={data.authorName}/>
        </div>

        <div>
            <label className="label mt-1 font-bold">Book Image<span className='text-red-700'>*</span></label>
            <input type="file" name='bookImage' className="file-input w-full" accept="image/*"/>
        </div>

        <div>
            <label className="label mt-1 font-bold">Category<span className='text-red-700'>*</span></label>
            <input type="text" name='bookCategory' className="input w-full" placeholder='Book Category' defaultValue={data.bookCategory}/>
        </div>

        <div className='md:col-span-2'>
            <label className="label mt-1 font-bold">Price($)<span className='text-red-700'>*</span></label>
            <input type="number" name='bookPrice' className="input w-full" placeholder="Book's Price" defaultValue={data.bookPrice}/>
        </div>

        <div className="md:col-span-2">
            <label className="label mt-1 font-bold">Description<span className='text-red-700'>*</span></label>
            <textarea className="textarea w-full" name='bookDescription' placeholder="A brief description of the book" defaultValue={data.bookDescription}></textarea>
        </div>

        <div className="md:col-span-2">
            <button className="btn btn-neutral mt-4 w-full">Publish</button>
        </div>
    </form>
</fieldset>
    </div>
    </>
  )
}

export default EditBook
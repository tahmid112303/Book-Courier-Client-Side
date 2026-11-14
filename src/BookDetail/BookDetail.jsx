import React from 'react'
import { useLoaderData, useNavigate } from 'react-router';

const BookDetail = () => {
    const bookData = useLoaderData();
    const navigate = useNavigate();

    const formattedDate = new Date(bookData.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });


  return (
        <>
            <div className="min-h-screen bg-gray-100 rounded-2xl mt-6 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col md:flex-row">
        
        {/* Book Cover Image */}
        <div className="md:w-2/5 bg-gray-900 relative">
          <img
            src={bookData.bookImage}
            alt={bookData.bookName}
            className="w-full h-72 md:h-full object-cover"
          />
          <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow">
            {bookData.bookCategory}
          </span>
        </div>

        {/* Book Details */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Status & Price Header */}
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 capitalize">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {bookData.status}
              </span>
              <span className="text-2xl font-bold text-indigo-600">
                ${bookData.bookPrice}
              </span>
            </div>

            {/* Title & Author */}
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              {bookData.bookName}
            </h2>
            <p className="text-sm text-gray-500 font-medium mt-1">
              by <span className="text-gray-800">{bookData.authorName}</span>
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              {bookData.bookDescription}
            </p>

            {/* Order Button */}
            <div className="mt-5">
              <button
                className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-200 shadow-md hover:shadow-lg text-sm"
              >
                Order
              </button>
            </div>
          </div>

          {/* Publisher / Submitter Metadata Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-gray-500">
            <div>
              <p>Published by:</p>
              <p className="font-semibold text-gray-800">{bookData.name}</p>
              <a
                href={`mailto:${bookData.email}`}
                className="text-indigo-500 hover:underline"
              >
                {bookData.email}
              </a>
            </div>
            <div className="sm:text-right">
              <span className="block text-gray-400">Published on</span>
              <span className="font-medium text-gray-700">{formattedDate}</span>
            </div>
          </div>
        </div>

      </div>

      {/* GO Back Button */}
    <div className='mt-6'>
            <button onClick={()=>navigate(-1)} className="btn btn-secondary">
                Go Back
            </button>
        </div>
    </div>


</>
  );
}

export default BookDetail
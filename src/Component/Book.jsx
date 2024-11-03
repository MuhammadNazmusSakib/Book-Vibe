import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({book}) => {
    const {bookId, bookName, author, image, review, rating, category, tags} = book
  return (
    <Link to={`/bookdetails/${bookId}`}>
    <div className='p-4 border border-slate-400 rounded-lg h-full'>
      <div className='flex flex-col items-center bg-slate-200 rounded-lg py-5 mb-5'>
        <img src={image} className='rounded-lg w-32 h-52' />
      </div>
      <div className='flex gap-4'>
        {
          tags.map((tag, index) => <button key={index} className=' px-2 py-1 bg-slate-300 rounded-lg text-green-700 font-bold mb-4'> {tag}
          </button>)
        }
      </div>
      <h2 className='text-2xl font-[500] mb-2'>{bookName}</h2>
      <p className='text-lg font-[500] mb-2'>By: {author}</p>
      <div className='flex place-content-between text-lg border-t-4 border-dashed mt-5'>
        <p>{category}</p>
        <p>{rating}</p>
      </div>
    </div>
    </Link>
  )
}

export default Book
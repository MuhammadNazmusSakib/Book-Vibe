import React from 'react'
import bannerbook from '../assets/books.jpg'
const Banner = () => {
  return (
    <div className='bg-slate-100 mt-10 rounded-lg flex px-20 py-10'>
        <div className='w-2/3 mt-10'>
            <h3 className='text-3xl font-bold'>Books to freshen up your bookshelf</h3>
            <button className='mt-10 text-lg px-8 py-2 rounded-lg bg-slate-300 hover:bg-green-500'>View The List</button>
        </div>
        <div className='w-1/3'>
            <img src={bannerbook} className='rounded-lg' />
        </div>
    </div>
  )
}

export default Banner
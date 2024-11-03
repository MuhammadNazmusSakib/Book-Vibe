import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex place-content-between'>
        <div>
            <h1 className='text-2xl font-bold'>Book Vibe</h1>
        </div>
        <div className='font-[500]'>
            <Link to= "/">
            <button className='mr-2 px-3 py-2 rounded-lg bg-slate-300 hover:bg-green-500'>Home</button>
            </Link>
            <button className='mr-2 px-3 py-2 rounded-lg bg-slate-300 hover:bg-green-500'>Listed Books</button>
            <button className='px-3 py-2 rounded-lg bg-slate-300 hover:bg-green-500'>Pages to Read</button>
        </div>
        <div className='font-[500]'>
            <button className='mr-2 px-3 py-2 rounded-lg bg-slate-300 hover:bg-green-500'>Sign In</button>
            <button className='mr-2 px-3 py-2 rounded-lg bg-slate-300 hover:bg-green-500'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar
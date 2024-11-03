import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='bg-slate-300 h-screen'>
            <div className='text-center py-10'>
                <h1 className='text-3xl font-bold mb-5'>Page Not Found</h1>
                <Link to="/">
                    <button className='px-5 py-3 rounded-lg bg-green-400 font-[500]'>Back to Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage
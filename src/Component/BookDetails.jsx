import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import {addStoredReadList, addStoredWishList} from '../Utility/localStorage'


const BookDetails = () => {

    const { bookId } = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)

    const book = data.find(book => book.bookId === id)
    const { bookId: currentBookId, bookName, author, image, review, rating, category, tags, yearOfPublishing, publisher, totalPages } = book

    const markAsRead = (id) => {
        addStoredReadList(id)
    }
    const addWishList =(id) => {
        addStoredWishList(id)
    }

    return (
        <div className='flex gap-5 mt-8 mb-5'>
            <div className='w-1/2 flex flex-col items-center bg-slate-200 rounded-lg py-5'>
                <img src={image} className='rounded-lg h-screen' />
            </div>
            <div className='w-1/2'>
                <h2 className='text-2xl font-[500] mb-2'>{bookName}</h2>
                <p className='text-lg font-[500] mb-2'>By: {author}</p>
                <div className='border-t-2 border-b-2 py-3 mb-3'>
                    <h3>{category}</h3>
                </div>
                <div className='mb-5'>
                    <p><span className='font-bold'>Review:</span> {review}</p>
                </div>
                <div className='flex gap-4'>
                    <span className='text-black font-bold'>Tags:
                        {
                            tags.map((tag, index) => <button
                                key={index}
                                className='px-2 py-1 bg-slate-300 rounded-lg text-green-700 font-bold mb-4 ml-3'> {tag}
                            </button>)
                        }
                    </span>
                </div>
                <div className='flex items-center gap-5 text-lg border-t-4 mt-5 font-[400]'>
                    <div>
                        <p className='mt-3'>Number of Pages</p>
                        <p className='mt-3'>Publisher</p>
                        <p className='mt-3'>Year of Publishing</p>
                        <p className='mt-3'>Rating</p>
                    </div>
                    <div>
                        <p className='mt-3'>: {totalPages}</p>
                        <p className='mt-3'>: {publisher}</p>
                        <p className='mt-3'>: {yearOfPublishing}</p>
                        <p className='mt-3'>: {rating}</p>
                    </div>
                </div>
                <div className='flex gap-5 mt-5 font-[500]'>
                    <button 
                    onClick={() => markAsRead(bookId)} 
                    className='mr-2 px-6 py-2 rounded-lg bg-green-500'>Mark As Read
                    </button>
                    <button 
                    onClick={() => addWishList(bookId)}
                    className='mr-2 px-6 py-2 rounded-lg bg-green-500'>WishList
                    </button>
                </div>
            </div>

        </div>
    )
}

export default BookDetails
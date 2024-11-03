import React, { useEffect, useState } from 'react'
import Book from './Book'


const Books = () => {

    const [books, setBooks] = useState([])

useEffect(() => {
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
}, [])

  return (
    <div className='mt-5'>
        <h2 className='text-center text-2xl font-bold'>Books: {books.length}</h2>
        <div className='grid grid-cols-3 gap-3 mb-10'>
            {
                books.map(book => <Book 
                    key={book.bookId}
                    book={book}
                />)
            }
        </div>
    </div>
  )
}

export default Books
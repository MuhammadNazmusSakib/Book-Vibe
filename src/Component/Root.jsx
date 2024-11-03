import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'


const Root = () => {
  return (
    <div className='mx-24 mt-3'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root
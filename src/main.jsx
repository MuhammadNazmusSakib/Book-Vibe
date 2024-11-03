import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './Component/Root.jsx'
import Home from './Component/Home.jsx'
import BookDetails from './Component/BookDetails.jsx'
import ErrorPage from './Component/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails/>,
        loader: () => fetch('/booksData.json')
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

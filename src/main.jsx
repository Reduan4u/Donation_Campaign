import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ErrorPage from './Components/Root/ErrorPage/ErrorPage';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import Category from './Components/Categories/Category/Category';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/donation.json')
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('/donation.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/categories/:category/:id',
        element: <Category></Category>,
        loader: () => fetch('/donation.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

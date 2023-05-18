import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Error from './Pages/ErrorPage/Error.jsx'
import Home from './Pages/Home/Home/Home.jsx'
import AddToy from './Pages/Toy/AddToy/AddToy'
import PrivateRoute from './Private/PrivateRoute'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import AuthProvider from './AuthProvider/AuthProvider'
import 'react-toastify/dist/ReactToastify.css';
import AllToys from './Pages/Toy/AllToys/AllToys'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addToy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/allToys')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)

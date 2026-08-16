import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Authlayout from './Modules/Authlayout/Authlayout'
import NotFound from './Modules/shared/NotFound'
import Login from './Modules/Authlayout/components/Login/Login'
import Register from './Modules/Authlayout/components/Register/Register'
import Forgetpass from './Modules/Authlayout/components/Forgetpass/Forgetpass'
import Resetpass from './Modules/Authlayout/components/Resetpass/Resetpass'
import ChangePass from './Modules/Authlayout/components/ChangePass/ChangePass'
import MasterLayout from './Modules/MasterLayout/Masterlayout'
import Home from './Modules/MasterLayout/components/Home/Home'
import Books from './Modules/MasterLayout/components/Books/Books'
import Cart from './Modules/MasterLayout/components/cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoutes from './ProtectedRoutes'
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Authlayout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgetpass', element: <Forgetpass /> },
        { path: 'resetpass', element: <Resetpass /> },
        { path: 'changepass', element: <ChangePass /> },
      ],
    },
    {
      path: 'dashboard',
      element: <ProtectedRoutes> <MasterLayout /> </ProtectedRoutes> ,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'books', element: <Books /> },
        { path: 'cart', element: <Cart /> },
      ]
    }
  ])

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes} ></RouterProvider>
    </>
  )
}

export default App

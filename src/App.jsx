import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home  from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'
import ProductsList from './components/ProductList'
import RootLayout from './components/RootLayout'
function App() {
  const routerObj=createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },{
          path:"products",
          element:<ProductsList/>
        },{
          path:"contact",
          element:<Contact/>
        },{
          path:"product",
          element:<Product/>
        }
      ]
    },
    
  ])
  return (
    <RouterProvider router={routerObj}/>
  )
}

export default App

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'

function App() {
  const Routes = createBrowserRouter([
    {
      path:'/',
      element:<Home></Home>
    }
  ])
  return (
    <>
     <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App

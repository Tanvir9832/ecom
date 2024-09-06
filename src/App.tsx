import { RouterProvider } from 'react-router-dom'
// import Login from './pages/Login'
import router from './router/Routes'

function App() {

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App

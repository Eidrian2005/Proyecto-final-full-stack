import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Routing from './routes/routing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routing />
      <ToastContainer position='top-center'/>  
    </>
  )
}

export default App

import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Routing from './routes/routing'
import { ProductProvider } from './components/ProductContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ProductProvider>
      <Routing />
      <ToastContainer position="top-center" />
    </ProductProvider>
    </>
  )
}

export default App

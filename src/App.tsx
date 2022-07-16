import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'normalize.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import { Error, Landing, Register, SharedLayout } from './pages'

export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SharedLayout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

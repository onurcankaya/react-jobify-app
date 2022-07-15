import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'normalize.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import { Dashboard, Error, Landing, Register } from './pages'

export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

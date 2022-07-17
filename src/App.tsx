import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'normalize.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import { Error, Landing, PrivateRoute, Register, SharedLayout } from './pages'

export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <SharedLayout />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'normalize.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

import {
  AddJob,
  AllJobs,
  Error,
  Landing,
  PrivateRoute,
  Profile,
  Register,
  SharedLayout,
  Stats,
} from './pages'

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
        >
          <Route index element={<Stats />} />
          <Route path='all-jobs' element={<AllJobs />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { Landing, NotFound } from './pages'

export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

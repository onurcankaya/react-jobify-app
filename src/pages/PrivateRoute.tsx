import { useSelector } from 'react-redux'
import { Navigate, RouteProps } from 'react-router-dom'

import { RootState } from '../store'

interface PrivateRouteProps extends RouteProps {
  children: React.ReactElement
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useSelector((store: RootState) => store.user)

  if (!user) {
    return <Navigate to='/landing' />
  }

  return children
}

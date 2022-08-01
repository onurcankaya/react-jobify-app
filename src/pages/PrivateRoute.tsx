import { Navigate, RouteProps } from 'react-router-dom'

import { useAppSelector } from '../features/hooks'

interface PrivateRouteProps extends RouteProps {
  children: React.ReactElement
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAppSelector((store) => store.user)

  if (!user) {
    return <Navigate to='/landing' />
  }

  return children
}

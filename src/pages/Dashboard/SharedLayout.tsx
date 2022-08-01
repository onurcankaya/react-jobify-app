import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { useAppSelector } from '../../features/hooks'

import { Navbar, Sidebar } from './'

type Props = {
  isSidebarOpen: boolean
}

export const SharedLayout = (): JSX.Element => {
  const { isSidebarOpen } = useAppSelector((store) => store.ui)

  return (
    <Wrapper>
      <Sidebar />
      <Navbar />
      <DashboardPage isSidebarOpen={isSidebarOpen}>
        <Outlet />
      </DashboardPage>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`
const DashboardPage = styled.div<Props>`
  width: 85vw;
  margin: 0;
  padding: 2rem 0;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? '300px' : '110px')};
  transition: var(--transition);
`

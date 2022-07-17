import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { RootState } from '../../store'

import { Navbar, Sidebar } from './'

type Props = {
  isSidebarOpen: boolean
}

export const SharedLayout = (): JSX.Element => {
  const { isSidebarOpen } = useSelector((store: RootState) => store.ui)

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
  margin: 0 auto;
  padding: 2rem 0;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? '300px' : '100px')};
  transition: var(--transition);
`

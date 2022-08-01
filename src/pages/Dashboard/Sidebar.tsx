import { FaWpforms } from 'react-icons/fa'
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from 'react-icons/hi'
import { ImProfile } from 'react-icons/im'
import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { toggleSidebar } from '../../features'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { NavigationLink } from '../../types'

type Props = {
  isSidebarOpen: boolean
}

const navLinks: NavigationLink[] = [
  {
    id: 1,
    label: 'stats',
    path: '/',
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    label: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    label: 'add job',
    path: 'add-job',
    icon: <FaWpforms />,
  },
  {
    id: 4,
    label: 'profile',
    path: 'profile',
    icon: <ImProfile />,
  },
]

export const Sidebar = () => {
  const dispatch = useAppDispatch()
  const { isSidebarOpen } = useAppSelector((store) => store.ui)

  return (
    <Wrapper isSidebarOpen={isSidebarOpen}>
      <Icon onClick={() => dispatch(toggleSidebar())}>
        {isSidebarOpen ? (
          <HiOutlineChevronDoubleLeft />
        ) : (
          <HiOutlineChevronDoubleRight />
        )}
      </Icon>
      <div className='nav-links'>
        {navLinks.map(({ id, path, icon, label }) => {
          return (
            <NavLink key={id} to={path} className='nav-link'>
              <span className='nav-link-icon'>{icon}</span>
              {label}
            </NavLink>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div<Props>`
  position: absolute;
  top: var(--nav-height);
  width: 270px;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-190px')};
  min-height: calc(100vh - var(--nav-height));
  background: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  .nav-links {
    width: 100%;
    height: 100%;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-500);
    padding: 2rem;
    text-transform: capitalize;
    text-decoration: none;
    transition: var(--transition);
  }
  .nav-link:hover {
    background: var(--grey-50);
    padding-left: 3rem;
    color: var(--primary-600);
  }
  .nav-link-icon {
    font-size: 2rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-600);
  }
`
const Icon = styled.div`
  cursor: pointer;
  color: var(--primary-600);
  position: absolute;
  top: 0.5rem;
  right: 1.2rem;
  font-size: 2.5rem;
`

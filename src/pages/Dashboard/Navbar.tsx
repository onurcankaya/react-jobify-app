import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Button, DropdownButton, Logo } from '../../components'
import { logoutUser } from '../../features'
import { RootState } from '../../store'

export const Navbar = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { user } = useSelector((store: RootState) => store.user)
  const dispatch = useDispatch()

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const logout = () => {
    dispatch(logoutUser())
  }

  return (
    <Wrapper>
      <div className='nav-center'>
        <Logo />
        <h3 className='title'>dashboard</h3>
        <DropdownButton
          icon={<FaUserCircle />}
          label={user?.name}
          onClick={toggleDropdown}
          content={
            isDropdownOpen ? (
              <Button type='button' transparent onClick={logout}>
                Log out
              </Button>
            ) : null
          }
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-1);
  background: var(--white);
  .nav-center {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .title {
      display: block;
    }
  }
`

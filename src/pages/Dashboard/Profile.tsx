import React, { useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { Button, FormRow } from '../../components'
import { useAppDispatch, useAppSelector } from '../../features/hooks'
import { updateUser } from '../../features/user/userSlice'

export const Profile = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((store) => store.user)

  const [userData, setUserData] = useState({
    name: user?.name || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    location: user?.location || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  const saveChanges = (e: React.FormEvent): void => {
    e.preventDefault()
    const { name, email, lastName, location } = userData

    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields')
      return
    }
    dispatch(updateUser({ user: userData }))
  }

  return (
    <Wrapper>
      <form className='form'>
        <h3>Profile</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            label='name'
            value={userData.name}
            onChange={handleChange}
          />
          <FormRow
            type='text'
            name='lastName'
            label='last name'
            value={userData.lastName}
            onChange={handleChange}
          />
          <FormRow
            type='text'
            name='email'
            label='email'
            value={userData.email}
            onChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            label='location'
            value={userData.location}
            onChange={handleChange}
          />
          <Button type='submit' onClick={saveChanges}>
            Save Changes
          </Button>
        </div>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-center {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      margin: 0 auto;
    }
  }
`

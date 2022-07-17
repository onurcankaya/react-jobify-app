import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'

import { Button, FormRow, Logo } from '../components'
import { loginUser, registerUser } from '../features'
import { AppDispatch, RootState } from '../store'

type StateProps = {
  name: string
  email: string
  password: string
  isMember: boolean
}

const initialState: StateProps = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

export const Register = (): JSX.Element => {
  const [values, setValues] = useState(initialState)
  const { user, isLoading } = useSelector((store: RootState) => store.user)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent): void => {
    const { email, isMember, name, password } = values
    e.preventDefault()

    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields!')
      return
    }

    if (isMember) {
      dispatch(loginUser({ email, password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Logo />
        <Title>{values.isMember ? 'Login' : 'Register'}</Title>
        {!values.isMember && (
          <FormRow
            type='name'
            name='name'
            label='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type='email'
          name='email'
          label='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          name='password'
          label='password'
          value={values.password}
          handleChange={handleChange}
        />
        <Button type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : values.isMember ? 'Log In' : 'Register'}
        </Button>
        <Description>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <Button type='button' onClick={toggleMember} transparent>
            {values.isMember ? 'Register' : 'Log in'}
          </Button>
        </Description>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
  width: var(--fluid-width);
  max-width: 400px;
  background: var(--white);
  padding: 2rem 2.5rem;
  margin: 3rem auto;
  transition: var(--transition);
  border-top: 5px solid var(--primary-500);
  border-radius: var(--borderRadius);
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 100%;
    margin-top: 1rem;
  }
`
const Title = styled.h3`
  margin: 1.5rem 0;
`
const Description = styled.div`
  margin: 1rem 0 0 0;
  text-align: center;
  button {
    width: auto;
    margin: 0;
  }
`

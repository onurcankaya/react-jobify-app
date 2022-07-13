import styled from 'styled-components'

import { LinkButton } from '../components'

export const Landing = () => {
  return (
    <Wrapper>
      <Title>Jobify</Title>
      <Subtitle>Modern Job Tracking App</Subtitle>
      <LinkButton to='/'>Login/Register</LinkButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Title = styled.h2`
  margin-bottom: 1rem;
`
const Subtitle = styled.h5`
  margin-bottom: 2rem;
`

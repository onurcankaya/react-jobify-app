import styled from 'styled-components'

import error from '../assets/images/lost.svg'
import { LinkButton } from '../components'

export const Error = (): JSX.Element => {
  return (
    <Wrapper>
      <Image src={error} alt='error-image' />
      <Subtitle>Page Not Found</Subtitle>
      <LinkButton to='/'>Go back</LinkButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Image = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 2rem;
  @media (min-width: 992px) {
    width: 500px;
  }
`
const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`

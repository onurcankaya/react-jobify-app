import styled from 'styled-components'

import { Navbar } from './Navbar'

export const SharedLayout = (): JSX.Element => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  )
}

const Wrapper = styled.div``

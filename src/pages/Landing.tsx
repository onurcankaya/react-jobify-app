import styled from 'styled-components'

import figures from '../assets/images/figures.svg'
import logo from '../assets/images/logo.svg'
import { LinkButton } from '../components'

export const Landing = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo src={logo} alt='jobify-logo' />
      </Nav>
      <Page>
        <ContentWrapper>
          <Title>
            Modern <span>Job</span> Tracking
          </Title>
          <Subtitle>
            Find your next creative gig with <span>Jobify</span>
          </Subtitle>
          <LinkButton to='/'>Login / Register</LinkButton>
        </ContentWrapper>
        <FiguresWrapper>
          <Figures src={figures} alt='standing-human-figures' />
        </FiguresWrapper>
      </Page>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`
const Nav = styled.nav`
  width: var(--fluid-width);
  max-width: var(--max-width);
  height: var(--nav-height);
  margin: 0 auto;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  width: 180px;
  height: auto;
`
const Page = styled.div`
  width: var(--fluid-width);
  max-width: var(--max-width);
  min-height: calc(100vh - var(--nav-height));
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  align-items: center;
  @media (min-width: 992px) {
    margin: -3rem auto 0 auto;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    color: var(--primary-600);
  }
  @media (max-width: 992px) {
    justify-content: center;
  }
`
const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`
const Subtitle = styled.h5`
  margin-bottom: 3rem;
  text-transform: none;
`
const FiguresWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`
const Figures = styled.img`
  width: 300px;
  height: 100%;
  display: none;
  @media (min-width: 992px) {
    width: 600px;
    display: block;
  }
`

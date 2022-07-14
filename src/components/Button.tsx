import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const sharedStyles = css`
  border-radius: var(--borderRadius);
  border-color: transparent;
  padding: 0.5rem 1rem;
  letter-spacing: var(--letterSpacing);
  background: var(--primary-600);
  color: var(--white);
  transition: var(--transition);
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background: var(--primary-500);
  }
`
export const Button = styled.button`
  ${sharedStyles}
`
export const ExternalLinkButton = styled.a`
  ${sharedStyles}
  text-decoration: none;
`
export const LinkButton = styled(Link)`
  ${sharedStyles}
  text-decoration: none;
`

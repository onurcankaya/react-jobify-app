import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type Props = {
  transparent?: boolean
}

const sharedStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  font-size: 1rem;
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  cursor: pointer;
`

const transparentButtonStyles = css`
  ${sharedStyles}
  display: inline-block;
  color: var(--primary-600);
  background-color: transparent;
  border: none;
  &:hover {
    color: var(--primary-700);
  }
`

const buttonStyles = css`
  ${sharedStyles}
  color: var(--white);
  background: var(--primary-600);
  padding: 0.5rem 1rem;
  border-radius: var(--borderRadius);
  border-color: transparent;
  box-shadow: var(--shadow-2);
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    background: var(--primary-700);
    box-shadow: var(--shadow-3);
  }
`
export const Button = styled.button<Props>`
  ${({ transparent }) => (transparent ? transparentButtonStyles : buttonStyles)}
`
export const ExternalLinkButton = styled.a<Props>`
  ${({ transparent }) => (transparent ? transparentButtonStyles : buttonStyles)}
  text-decoration: none;
`
export const LinkButton = styled(Link)<Props>`
  ${({ transparent }) => (transparent ? transparentButtonStyles : buttonStyles)}
  text-decoration: none;
`

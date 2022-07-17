import { FaCaretDown } from 'react-icons/fa'
import styled from 'styled-components'

import { Button } from './Button'

export const DropdownButton = ({
  icon,
  label,
  onClick,
  content,
}: {
  icon: React.ReactElement
  label: string | undefined
  onClick: () => void
  content: JSX.Element | null
}): JSX.Element => (
  <Wrapper>
    <Button type='button' onClick={onClick}>
      {icon}
      {label}
      <FaCaretDown />
    </Button>
    {content && <div className='dropdown'>{content}</div>}
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    border-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
  }
`

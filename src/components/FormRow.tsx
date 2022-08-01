import styled from 'styled-components'

type Props = {
  type: string
  name: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const FormRow = ({
  type,
  name,
  label,
  value,
  onChange,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input type={type} name={name} value={value} onChange={onChange} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`
const Label = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
  font-size: var(--smallText);
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
`
const Input = styled.input`
  width: 100%;
  height: 2.2rem;
  padding: 0.375rem 0.75rem;
  background: var(--backgroundColor);
  border: 1px solid var(--grey-200);
  border-radius: var(--borderRadius);
`

import styled, { css } from 'styled-components'
interface QuantityInputContainerProps {
  size?: 'medium' | 'small'
}
export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 0 0 4.5rem;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme['base-title']};
    &:focus {
      outline: none;
    }
  }
  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`

export const IconInputWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${(props) => props.theme['purple-dark']};
  transition: 0.5s;
  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

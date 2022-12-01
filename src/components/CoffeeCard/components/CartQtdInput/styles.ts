import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;
  padding: 0.5rem 0.531rem;

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
  padding: 0.5rem;
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

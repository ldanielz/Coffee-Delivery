import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  position: relative;

  > p {
    color: ${(props) => props.theme['base-error']};
  }
`

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme['base-error']};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  height: 100%;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

import styled, { css } from 'styled-components'

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
    color: ${(props) => props.theme['base-error']};
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme['purple-light']};
      border-color: ${theme.purple};

      &:hover {
        background: ${({ theme }) => theme['base-hover']};
      }
    `}
  }
`
export const ContentContainer = styled.div`
  padding: 0 1rem;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme['base-button']};
  transition: 0.3s;

  svg {
    color: ${({ theme }) => theme.purple};
  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${(props) => props.theme['base-text']};
    text-transform: uppercase;
  }
`

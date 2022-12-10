import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 2.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: auto;
  }
`

export const CheckoutOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  h1 {
    font-family: 'Baloo 2', serif;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`

export const TitleFormContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
  }
`

export const AddressFormContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  width: 100%;
  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);

    .cep {
      grid-column: 1;
      max-width: 100%;
    }

    .street {
      grid-column: 1;
    }

    .complement {
      grid-column: 1;
    }
  }
`

export const SelectedCoffeesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  h1 {
    font-family: 'Baloo 2', serif;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const DetailsContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 2.5rem 0.4rem;
  }
`

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3;
    }
    h1 {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.3;
    }
  }
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    margin-top: 0.7rem;

    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    border: none;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.6;

    text-transform: uppercase;
    font-stretch: 100;
    cursor: pointer;

    transition: 0.3s;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`

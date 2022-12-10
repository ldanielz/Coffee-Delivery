import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 2.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const CheckoutOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
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
  display: flex;
  max-width: 100%;

  flex-direction: column;
  width: 40rem;
  gap: 0.75rem;
`
export const DetailsContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
  display: flex;
  flex-direction: column;
`

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

import styled from 'styled-components'

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

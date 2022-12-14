import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  h1 {
    font-family: 'Baloo 2', serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['yellow-dark']};
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    @media (max-width: 1000px) {
      flex-direction: column;

      > img {
        display: none;
      }
    }
  }
`
export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.background};
  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`
export const ItemWithIconText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;

  color: ${(props) => props.theme['base-text']};
`

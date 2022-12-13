import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme['yellow-dark']};
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

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    font-size: 1rem;
    line-height: 1.3;
  }
`
export const ItemIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
`

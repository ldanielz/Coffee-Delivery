import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  flex: 0 1 16rem;

  margin-bottom: 2.5rem;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 1.25rem;
  padding-top: 0;
  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const CoffeeCardTagBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem;
  padding: 0.25rem 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  span {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const CoffeeName = styled.div`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`

export const CoffeeDescription = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2rem;
`

export const CoffeeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CartInfoPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 3px;
  > p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: right;
  }
  strong {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    text-align: right;
  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  width: 7.5rem;
  gap: 0.19rem;
  > button {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 4px;
    width: 2.375rem;
    height: 2.375rem;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};

    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`

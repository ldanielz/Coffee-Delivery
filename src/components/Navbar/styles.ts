import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 6.5rem;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  background: ${(props) => props.theme.background};

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 2.5rem;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  gap: 0.75rem;
  height: 2.375rem;
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  font-family: 'ROBOTO', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;

  span {
    color: ${(props) => props.theme['purple-dark']};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.25rem;
  height: 2.3rem;
  width: 2.3rem;
  position: relative;

  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    right: -0.5rem;
    top: -0.5rem;

    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 100%;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 0.825rem;
    line-height: 1.3%;
    color: ${(props) => props.theme.white};
    text-align: center;
  }
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

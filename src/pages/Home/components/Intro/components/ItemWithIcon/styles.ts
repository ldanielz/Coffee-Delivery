import styled from 'styled-components'

interface ItemIconDivProps {
  colorBackground: string
}

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
export const ItemIconDiv = styled.div<ItemIconDivProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.colorBackground};
  color: ${(props) => props.theme.white};
`

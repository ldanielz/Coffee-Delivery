import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
  padding: 0 0.25rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme['base-card']};
  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
    p {
      font-weight: 400;
      font-size: 0.875rem;
      font-family: 'Roboto', sans-serif;
    }
  }
  > p {
    display: flex;
    text-align: right;
    align-items: center;
    justify-content: flex-end;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;

    width: 100%;
  }
`
export const CoffeePrice = styled.div`
  display: flex;
`

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  color: ${({ theme }) => theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.6;

  border: none;
  background: ${({ theme }) => theme['base-button']};

  transition: 0.4s;
  svg {
    color: ${({ theme }) => theme.purple};
  }
  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`

import styled from 'styled-components'

export const CoffeeListWrapper = styled.section`
  width: 100%;
  margin-top: 2rem;
`
export const CoffeListHeader = styled.header`
  width: 100%;
  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
  }
`
export const CoffeeListContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 3.375rem;
`
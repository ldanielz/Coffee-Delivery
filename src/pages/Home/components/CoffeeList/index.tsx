import { CoffeeCard } from '../../../../components/CoffeeCard'
import {
  CoffeeListContainer,
  CoffeeListWrapper,
  CoffeeListHeader,
} from './styles'

import { CoffeesData } from '../../../../data/CoffeesData'

export function CoffeeList() {
  return (
    <CoffeeListWrapper className="wrapper">
      <CoffeeListHeader>
        <h1>Nossos cafés</h1>
      </CoffeeListHeader>

      <CoffeeListContainer>
        {CoffeesData.map((coffee) => {
          return <CoffeeCard coffee={coffee} key={coffee.id} />
        })}
      </CoffeeListContainer>
    </CoffeeListWrapper>
  )
}

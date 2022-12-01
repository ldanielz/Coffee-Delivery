import { CoffeeCard } from '../../../../components/CoffeeCard'
import {
  CoffeeListContainer,
  CoffeeListWrapper,
  CoffeListHeader,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeeListWrapper className="wrapper">
      <CoffeListHeader>
        <h1>Nossos cafés</h1>
      </CoffeListHeader>

      <CoffeeListContainer>
        <CoffeeCard key={1} />
        <CoffeeCard key={2} />
        <CoffeeCard key={3} />
        <CoffeeCard key={4} />
        <CoffeeCard key={5} />
      </CoffeeListContainer>
    </CoffeeListWrapper>
  )
}

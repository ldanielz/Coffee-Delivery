import {
  AddCartWrapper,
  CartInfoPrice,
  CoffeCardContainer,
  CoffeeCardFooter,
  CoffeeCardTagBadge,
  CoffeeDescription,
  CoffeeName,
} from './styles'

import Capuccino from './assets/Capuccino.png'
import { ShoppingCart } from 'phosphor-react'
import { CartQtdInput } from './components/CartQtdInput'

export function CoffeeCard() {
  return (
    <CoffeCardContainer>
      <img src={Capuccino} alt="" />
      <CoffeeCardTagBadge>
        <span>TRADICIONAL</span>
      </CoffeeCardTagBadge>
      <CoffeeName>Expresso Tradicional</CoffeeName>
      <CoffeeDescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDescription>
      <CoffeeCardFooter>
        <CartInfoPrice>
          <p>R$</p>
          <strong>9,90</strong>
        </CartInfoPrice>
        <AddCartWrapper>
          <CartQtdInput quantity={1} />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeCardContainer>
  )
}

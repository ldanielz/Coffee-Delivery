import {
  AddCartWrapper,
  CartInfoPrice,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardTagBadge,
  CoffeeDescription,
  CoffeeName,
} from './styles'

import { ShoppingCart } from 'phosphor-react'
import { CartQtdInput } from './components/CartQtdInput'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncreaseQuantity() {
    setQuantity((state) => state + 1)
  }
  function handleDecreaseQuantity() {
    setQuantity((state) => state - 1)
  }
  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.image}`} alt="" />
      <CoffeeCardTagBadge>
        {coffee.tags.map((tag) => {
          return <span key={`${coffee.id}${tag}`}>{tag}</span>
        })}
      </CoffeeCardTagBadge>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDescription>{coffee.description}</CoffeeDescription>
      <CoffeeCardFooter>
        <CartInfoPrice>
          <p>R$</p>
          <strong>
            {coffee.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </strong>
        </CartInfoPrice>
        <AddCartWrapper>
          <CartQtdInput
            quantity={quantity}
            onDecrease={handleDecreaseQuantity}
            onIncrease={handleIncreaseQuantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  )
}

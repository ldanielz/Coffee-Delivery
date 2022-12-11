import { Trash } from 'phosphor-react'
import { FormEvent } from 'react'
import { CartQtdInput } from '../../../../components/CoffeeCard/components/CartQtdInput'
import { useCart } from '../../../../hooks/useCart'
import { CartItem } from '../../../../reducers/cartItems/reducer'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

interface CoffeeCartCardProps {
  coffee: CartItem
}
export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeQtdItem, removeCartItem } = useCart()

  function handleIncrease() {
    changeQtdItem(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeQtdItem(coffee.id, 'decrease')
  }

  function handleRemove(event: FormEvent) {
    event.preventDefault()
    removeCartItem(coffee.id)
  }
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = coffeeTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.image}`} alt="" />
        <div>
          <p>{coffee.name}</p>
          <ActionsContainer>
            <CartQtdInput
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}

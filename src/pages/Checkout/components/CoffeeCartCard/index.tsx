import { Trash } from 'phosphor-react'
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
  const { changeCartItem, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItem(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItem(coffee.id, 'decrease')
  }

  function handleRemove() {
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

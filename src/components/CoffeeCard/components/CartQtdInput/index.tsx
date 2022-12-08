import { Minus, Plus } from 'phosphor-react'
import { IconInputWrapper, QuantityInputContainer } from './styles'

interface CartQtdInputProps {
  size?: 'medium' | 'small'
  quantity: number
  onIncrease?: () => void
  onDecrease?: () => void
}

export function CartQtdInput({
  quantity,
  onDecrease,
  onIncrease,
}: CartQtdInputProps) {
  return (
    <QuantityInputContainer>
      <IconInputWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconInputWrapper>
      <input type="number" readOnly value={quantity} />
      <IconInputWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconInputWrapper>
    </QuantityInputContainer>
  )
}

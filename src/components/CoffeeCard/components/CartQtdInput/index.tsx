import { Minus, Plus } from 'phosphor-react'
import { IconInputWrapper, QuantityInputContainer } from './styles'

interface CartQtdInputProps {
  size?: 'medium' | 'small'
  quantity: number
  onIncrease?: () => void
  onDecrease?: () => void
}

export function CartQtdInput({ quantity }: CartQtdInputProps) {
  return (
    <QuantityInputContainer>
      <IconInputWrapper disabled={quantity <= 1}>
        <Minus size={14} weight="fill" />
      </IconInputWrapper>
      <input type="number" readOnly value={quantity} />
      <IconInputWrapper>
        <Plus size={14} weight="fill" />
      </IconInputWrapper>
    </QuantityInputContainer>
  )
}

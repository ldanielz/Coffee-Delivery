import { ReactNode } from 'react'
import { Item, ItemIconDiv } from './styles'

interface ItemWithIconProps {
  icon: ReactNode
  text: string
  backgroundColor: string
}

export function ItemWithIcon({
  icon,
  text,
  backgroundColor,
}: ItemWithIconProps) {
  return (
    <Item>
      <ItemIconDiv colorBackground={backgroundColor}>{icon}</ItemIconDiv>
      <span>{text}</span>
    </Item>
  )
}

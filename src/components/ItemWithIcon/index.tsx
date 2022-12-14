import { ReactNode } from 'react'
import { Item, ItemIconDiv } from './styles'

interface ItemWithIconProps {
  icon: ReactNode
  text: string | ReactNode
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
      {typeof text === 'string' ? <p>{text}</p> : text}
    </Item>
  )
}

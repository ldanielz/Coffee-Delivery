import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import CoffeDeliveryIntro from './assets/CoffeDeliveryIntro.png'
import { ItemWithIcon } from './components/ItemWithIcon'
import {
  ImageContainer,
  IntroContainer,
  IntroWrapper,
  ItemsContainer,
  TitleContainer,
} from './styles'

export function Intro() {
  const theme = useTheme()

  return (
    <IntroWrapper>
      <IntroContainer className="wrapper">
        <TitleContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <ItemsContainer>
            <ItemWithIcon
              icon={<ShoppingCart size={16} weight="fill" />}
              backgroundColor={theme['yellow-dark']}
              text="Compra simples e segura"
            />
            <ItemWithIcon
              icon={<Package size={16} weight="fill" />}
              backgroundColor={theme['base-text']}
              text="Embalagem mantém o café intacto"
            />
            <ItemWithIcon
              icon={<Timer size={16} weight="fill" />}
              backgroundColor={theme.yellow}
              text="Entrega rápida e rastreada"
            />
            <ItemWithIcon
              icon={<Coffee size={16} weight="fill" />}
              backgroundColor={theme.purple}
              text="O café chega fresquinho até você"
            />
          </ItemsContainer>
        </TitleContainer>
        <ImageContainer>
          <img src={CoffeDeliveryIntro} alt="" />
        </ImageContainer>
      </IntroContainer>
    </IntroWrapper>
  )
}

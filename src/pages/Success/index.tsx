import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import confirmedOrderIllustration from '../../assets/order-success.svg'
import {
  ItemWithIconText,
  OrderDetailsContainer,
  SuccessContainer,
} from './styles'
import { Item } from '../../components/ItemWithIcon/styles'
import { useTheme } from 'styled-components'
import { ItemWithIcon } from '../../components/ItemWithIcon'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function SuccessCheckout() {
  const theme = useTheme()
  const { state } = useLocation() as unknown as LocationType
  const navigate = useNavigate()

  const paymentMethodText = {
    credit: 'Cartão de Crédito',
    debit: 'Débito',
    money: 'Dinheiro',
  }

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  })

  if (!state) return <></>

  return (
    <SuccessContainer className="wrapper">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </div>
      <section>
        <OrderDetailsContainer>
          <Item>
            <ItemWithIcon
              icon={<MapPin size={16} weight="fill" />}
              backgroundColor={theme.purple}
              text={
                <ItemWithIconText>
                  Entrega em{' '}
                  <strong>
                    {state.street}, {state.number} {state?.complement}.
                  </strong>{' '}
                  {state.district} - {state.city}, {state.uf}
                </ItemWithIconText>
              }
            />
          </Item>
          <Item>
            <ItemWithIcon
              icon={<Clock size={16} weight="fill" />}
              backgroundColor={theme.yellow}
              text={
                <ItemWithIconText>
                  Previsão de entrega <br />
                  <strong>20 min - 30 min</strong>
                </ItemWithIconText>
              }
            />
          </Item>
          <Item>
            <ItemWithIcon
              icon={<CurrencyDollar size={16} weight="fill" />}
              backgroundColor={theme['yellow-dark']}
              text={
                <ItemWithIconText>
                  Pagamento na entrega <br />
                  <strong>{paymentMethodText[state.paymentMethod]}</strong>
                </ItemWithIconText>
              }
            />
          </Item>
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </SuccessContainer>
  )
}

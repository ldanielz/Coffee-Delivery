import { Clock, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import { OrderData } from '../Checkout'
import confirmedOrderIllustration from '../../assets/order-success.svg'

import {
  Item,
  ItemIconDiv,
  OrderDetailsContainer,
  SuccessContainer,
} from './styles'

interface LocationType {
  state: OrderData
}

export function SuccessCheckout() {
  const { state } = useLocation() as unknown as LocationType
  return (
    <SuccessContainer className="wrapper">
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h1>Agora é só aguardar que logo o café chegará até você</h1>
      </div>
      <section>
        <OrderDetailsContainer>
          <Item>
            <ItemIconDiv>{<MapPin weight="fill" />}</ItemIconDiv>
            <span>
              Entrega em{' '}
              <strong>
                {state.street}, {state.number}
              </strong>
              <br />
              {state.district} - {state.city}, {state.uf}
            </span>
          </Item>
          <Item>
            <ItemIconDiv>{<Clock weight="fill" />}</ItemIconDiv>
            <span>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </Item>
          <Item>
            <ItemIconDiv>{<CurrencyDollar weight="fill" />}</ItemIconDiv>
            <span>
              Pagamento na entrega
              <br />
              <strong>{state.paymentMethod}</strong>
            </span>
          </Item>
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} alt="" />
      </section>
    </SuccessContainer>
  )
}

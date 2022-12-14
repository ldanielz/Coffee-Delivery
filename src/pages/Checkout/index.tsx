/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckoutContainer,
  CheckoutOrderContainer,
  ConfirmationSectionContainer,
  DetailsContainer,
  FormContainer,
  SelectedCoffeesContainer,
  TitleFormContainer,
} from './styles'
import { useCart } from '../../hooks/useCart'
import { CoffeeCartCard } from './components/CoffeeCartCard'

import { PaymentMethod } from './components/PaymentMethod'
import { AddressForm } from './components/AddressForm'

export enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidatorSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe a Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: 'Informe o método de pagamento',
      }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidatorSchema>

export function Checkout() {
  const confirmOrderForm = useForm<OrderData>({
    resolver: zodResolver(confirmOrderFormValidatorSchema),
  })

  const { cartItems, cartItemsTotal, cartQuantity, cleanCart } = useCart()

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  const DELIVERY_PRICE = 1.5
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = cartItemsTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
  const formattedCartTotal = cartTotal.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
  const formattedDeliveryPrice = DELIVERY_PRICE.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  function handleConfirmOrder(data: OrderData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <CheckoutContainer
      className="wrapper"
      onSubmit={handleSubmit(handleConfirmOrder)}
    >
      <FormProvider {...confirmOrderForm}>
        <CheckoutOrderContainer>
          <h1>Complete o seu Pedido</h1>
          <FormContainer>
            <TitleFormContainer>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </TitleFormContainer>
            <AddressForm />
          </FormContainer>
          <FormContainer>
            <TitleFormContainer>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </TitleFormContainer>
            <PaymentMethod />
          </FormContainer>
        </CheckoutOrderContainer>
        <SelectedCoffeesContainer>
          <h1>Cafés selecionados</h1>

          <DetailsContainer>
            <div>
              {cartItems.map((item) => {
                return <CoffeeCartCard key={item.id} coffee={item} />
              })}
            </div>
            <ConfirmationSectionContainer>
              <div>
                <p>Total de itens</p>
                <p>R$ {formattedItemsTotal} </p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ {formattedDeliveryPrice}</p>
              </div>
              <div>
                <h1>Total</h1>
                <h1>R$ {formattedCartTotal} </h1>
              </div>
              <button type="submit" disabled={cartQuantity <= 0}>
                Confirmar Pedido
              </button>
            </ConfirmationSectionContainer>
          </DetailsContainer>
        </SelectedCoffeesContainer>
      </FormProvider>
    </CheckoutContainer>
  )
}

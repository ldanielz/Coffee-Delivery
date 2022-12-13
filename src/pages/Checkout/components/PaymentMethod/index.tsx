import { Bank, CreditCard, Money } from 'phosphor-react'
import {
  ContentContainer,
  PaymentMethodContainer,
  PaymentMethodOptionsContainer,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { PaymentMethods } from '../..'
export function PaymentMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const enumPaymentMethods = PaymentMethods

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      <PaymentMethodContainer>
        <input
          id="credito"
          value={enumPaymentMethods.credit}
          type="radio"
          {...register('paymentMethod')}
        />
        <label htmlFor="credito">
          <ContentContainer>
            <CreditCard size={16} />
            <span>Cartão de Crédito</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
      <PaymentMethodContainer>
        <input
          id="debito"
          value={enumPaymentMethods.debit}
          type="radio"
          {...register('paymentMethod')}
        />
        <label htmlFor="debito">
          <ContentContainer>
            <Bank size={16} />
            <span>Cartão de Débito</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
      <PaymentMethodContainer>
        <input
          id="dinheiro"
          value={enumPaymentMethods.money}
          type="radio"
          {...register('paymentMethod')}
        />
        <label htmlFor="dinheiro">
          <ContentContainer>
            <Money size={16} />
            <span>Dinheiro</span>
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
      {paymentMethodError && <p>{paymentMethodError}</p>}
    </PaymentMethodOptionsContainer>
  )
}

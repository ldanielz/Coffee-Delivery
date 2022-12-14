import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  CartContainer,
  HeaderContainer,
  LocationContainer,
} from './styles'
import logoCoffeDelivery from '../../assets/CoffeDeliveryLogo.png'
import { useCart } from '../../hooks/useCart'

export default function Navbar() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div className="wrapper">
        <NavLink to="/">
          <img src={logoCoffeDelivery} alt="" />
        </NavLink>
        <ActionsContainer>
          <LocationContainer>
            <MapPin size={22} weight="fill" /> <span>Ananindeua, PA</span>
          </LocationContainer>
          <CartContainer>
            <NavLink to="/checkout">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </CartContainer>
        </ActionsContainer>
      </div>
    </HeaderContainer>
  )
}

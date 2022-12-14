import { createContext, ReactNode, useEffect, useReducer } from 'react'

import { Coffee } from '../components/CoffeeCard'
import {
  addNewItemCartAction,
  clearCartAction,
  removeItemCartAction,
  updateItemAction,
} from '../reducers/cartItems/actions'
import { CartItemsReducer } from '../reducers/cartItems/reducer'

interface CartItemCoffee extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItemCoffee[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItemCoffee) => void
  changeQtdItem: (cartItemId: number, type: 'increase' | 'decrease') => void
  removeCartItem: (cartItemId: number) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

const COFFEE_ITEMS_STORAGE_KEY = '@coffeeDelivery:cartItems-1.0.0'

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartItemsState, dispatch] = useReducer(
    CartItemsReducer,
    {
      cartItems: [],
    },
    () => {
      const storedCartItemsAsJSON = localStorage.getItem(
        COFFEE_ITEMS_STORAGE_KEY,
      )

      if (storedCartItemsAsJSON) {
        return JSON.parse(storedCartItemsAsJSON)
      } else {
        return { cartItems: [] }
      }
    },
  )

  const { cartItems } = cartItemsState

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItemCoffee) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    if (
      coffeeAlreadyExistsInCart !== undefined &&
      coffeeAlreadyExistsInCart >= 0
    ) {
      dispatch(updateItemAction(coffeeAlreadyExistsInCart, coffee.quantity))
    } else {
      const newItem: CartItemCoffee = {
        id: coffee.id,
        image: coffee.image,
        name: coffee.name,
        tags: coffee.tags,
        description: coffee.description,
        price: coffee.price,
        quantity: coffee.quantity,
      }
      dispatch(addNewItemCartAction(newItem))
    }
  }

  function changeQtdItem(cartItemId: number, type: 'increase' | 'decrease') {
    const indexCoffeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === cartItemId,
    )

    if (
      indexCoffeAlreadyExistsInCart !== undefined &&
      indexCoffeAlreadyExistsInCart >= 0
    ) {
      const quantity = type === 'increase' ? 1 : -1
      dispatch(updateItemAction(indexCoffeAlreadyExistsInCart, quantity))
    }
  }

  function removeCartItem(cartItemId: number) {
    const indexCoffeToRemoveInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === cartItemId,
    )
    if (
      indexCoffeToRemoveInCart !== undefined &&
      indexCoffeToRemoveInCart >= 0
    ) {
      dispatch(removeItemCartAction(indexCoffeToRemoveInCart))
    }
  }

  function cleanCart() {
    dispatch(clearCartAction())
  }

  useEffect(() => {
    const stateCartItemsJson = JSON.stringify(cartItemsState)
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, stateCartItemsJson)
  }, [cartItemsState])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartItemsTotal,
        cartQuantity,
        addCoffeeToCart,
        changeQtdItem,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

import produce from 'immer'
import { ActionTypes } from './actions'

export interface CartItem {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
  quantity: number
}

interface CartItemState {
  cartItems: CartItem[]
}

export function CartItemsReducer(state: CartItemState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      return produce(state, (draft) => {
        draft.cartItems.push(action.payload.newItem)
      })

    case ActionTypes.UPDATE_QTD_ITEM:
      return produce(state, (draft) => {
        draft.cartItems[action.payload.index].quantity +=
          action.payload.quantity
      })

    default:
      return state
  }
}

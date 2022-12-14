/* eslint-disable no-unused-vars */
import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  UPDATE_QTD_ITEM = 'UPDATE_QTD_ITEM',
  REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
  CLEAN_CART = 'CLEAN_CART',
}

export function addNewItemCartAction(newItem: CartItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: { newItem },
  }
}

export function updateItemAction(index: number, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QTD_ITEM,
    payload: { index, quantity },
  }
}

export function removeItemCartAction(index: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_CART,
    payload: { index },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
  }
}

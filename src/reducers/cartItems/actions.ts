import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  UPDATE_QTD_ITEM = 'UPDATE_QTD_ITEM',
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

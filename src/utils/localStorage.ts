import { UI, User } from '../types'

export const addItemToLocalStorage = (key: string, item: User | UI) => {
  localStorage.setItem(key, JSON.stringify(item))
}

export const getItemFromLocalStorage = (key: string) => {
  const result = localStorage.getItem(key)
  const item = result ? JSON.parse(result) : null
  return item
}

export const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}

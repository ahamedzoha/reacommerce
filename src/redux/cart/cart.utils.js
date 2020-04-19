export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  )

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
}

export const decreaseItemQty = (cartItems, itemToDecrementQty) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToDecrementQty.id
  )

  if (existingCartItem.quantity === 1) {
    return removeItemFromCart(cartItems, existingCartItem)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrementQty.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

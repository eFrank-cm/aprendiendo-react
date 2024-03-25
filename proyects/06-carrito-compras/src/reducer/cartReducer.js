export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

export function updateLocalStorage(state) {
    localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_TO_CART': {
            // payload in this case is product
            const { id } = payload
            // if product is already in cart
            const indexProductInCart = state.findIndex(item => item.id === id)
            if (indexProductInCart >= 0) {
                // 👀 una forma sería usando structuredClone
                const newState = structuredClone(state)
                newState[indexProductInCart].quantity += 1
                updateLocalStorage(newState)
                return newState

                // 👶 usando el map
                // const newState = state.map(item => {
                //   if (item.id === id) {
                //     return {
                //       ...item,
                //       quantity: item.quantity + 1
                //     }
                //   }

                //   return item
                // })

                // ⚡ usando el spread operator y slice
                // const newState = [
                //     ...state.slice(0, productInCartIndex),
                //     { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
                //     ...state.slice(productInCartIndex + 1)
                // ]
            }

            // if not exist product in cart
            const newState = [
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case 'REMOVE_FROM_CART': {
            // payload in this case is product
            const { id } = payload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAR_CART': {
            updateLocalStorage([])
            return []
        }
    }

    return state
}
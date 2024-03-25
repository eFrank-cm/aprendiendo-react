import { useReducer } from "react"
import { cartInitialState, cartReducer } from "../reducer/cartReducer"

export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(product) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

    function removeFromCart(product) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product
        })
    }

    function clearCart() {
        dispatch({
            type: 'CLEAR_CART',
        })
    }

    return { state, addToCart, removeFromCart, clearCart }
}

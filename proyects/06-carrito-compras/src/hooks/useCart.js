import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    // context = {addToCart, clearCart}
    return context
}
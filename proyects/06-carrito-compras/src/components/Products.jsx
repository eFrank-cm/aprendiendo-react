import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'

export const Products = ({ products }) => {
    const { cart, addToCart, removeFromCart } = useCart()

    function checkProductInCart(product) {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {
                    products.slice(0, 10).map(product => {
                        const isProductInCard = checkProductInCart(product)

                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>

                                <div>
                                    <button
                                        style={{
                                            backgroundColor: isProductInCard ? 'red' : '#09f'
                                        }}
                                        onClick={() => isProductInCard ? removeFromCart(product) : addToCart(product)}
                                    >
                                        {
                                            isProductInCard
                                                ? <RemoveFromCartIcon />
                                                : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

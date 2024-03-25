import { products as initialProducts } from './mocks/products.json'
import { Header } from "./components/Header"
import { Products } from "./components/Products"
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './contexts/CartContext'

export const App = () => {
    const { products, filters, setFilters } = useFilters(initialProducts)

    return (
        <CartProvider>
            <Header />
            <Cart />
            <Products products={products} />
            {IS_DEVELOPMENT && <Footer />}
        </CartProvider>
    )
}


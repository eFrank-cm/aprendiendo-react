import { useContext } from 'react'
import { FiltersContext } from '../contexts/FiltersContext'

export function useFilters(products) {
    const { filters, setFilters } = useContext(FiltersContext)

    function filtersProducts() {
        return products.filter(product => {
            return (
                product.price <= filters.maxPrice &&
                (
                    filters.category === 'all' ||
                    product.category === filters.category
                )
            )
        })
    }

    const filteredProducts = filtersProducts(products)

    return { products: filteredProducts, filters, setFilters }
}
import { useContext, useId, useState } from 'react'
import './Filters.css'
import { FiltersContext } from '../contexts/FiltersContext'

export const Filters = () => {
    const { filters, setFilters } = useContext(FiltersContext)
    const maxPriceFilterId = useId()
    const categoryFilterId = useId()

    function handleOnChangeRange(e) {
        setFilters(prevState => ({
            ...prevState,
            maxPrice: e.target.value
        }))
    }

    function handleOnChangeCategory(e) {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={maxPriceFilterId}>Max. Precio</label>
                <input
                    type="range"
                    id={maxPriceFilterId}
                    min={0}
                    max={2000}
                    onChange={handleOnChangeRange}
                    value={filters.maxPrice}
                />
                <span>${filters.maxPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleOnChangeCategory}>
                    <option value="all">Todos</option>
                    <option value="smartphones">Moviles</option>
                    <option value="laptops">Laptops</option>
                </select>
            </div>
        </section>
    )
}

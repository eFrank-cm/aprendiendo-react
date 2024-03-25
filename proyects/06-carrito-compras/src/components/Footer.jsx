import { useContext } from 'react'
import './Footer.css'
import { FiltersContext } from '../contexts/FiltersContext'
import { useCart } from '../hooks/useCart'

export const Footer = () => {
    const {filters, setFilters} = useContext(FiltersContext)
    const { cart } = useCart()

    return (
        <footer className='footer'>
            <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}

import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

const Cart = () => {
    const {cart} = useContext(CartContext)
    return (
        <>
            {cart.map((prod)=>( 
            <li key={prod.id}>{prod.qty}</li> ))}
        </>
    )
}

export default Cart

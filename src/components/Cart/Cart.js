import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, emptyCart, removeCart } = useContext(CartContext);
    
    return (
        <>
           <h1 className='compra'>Tu compra</h1>
        {cart.map(element=><div className='elementoCarrito'>
          <div >{element.qty} {element.name} por ${element.price} c/u</div>
          <button onClick={()=>{removeCart(element.id)}}>X</button></div>)}
        <Link to='/'>
          <button className='botonVaciar' onClick={()=>{emptyCart()}}>Vaciar carrito</button>
        </Link>
        </>
    )
}

export default Cart

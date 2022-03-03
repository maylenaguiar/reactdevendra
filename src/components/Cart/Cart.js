import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { totalCart, cart, emptyCart, removeCart, getTotal } = useContext(CartContext);
    
    return (
        <>
        {
          totalCart(cart)>0 ?
          <div><h1 className='compra'>Tu compra</h1>
        {cart.map(element=><div className='elementoCarrito'>
          <div>{element.qty} {element.name} por ${element.price} c/u</div>
          <button onClick={()=>{
            removeCart(element.id)}}>X</button>
          </div>)}
          <h2 className='elementoCarrito'>Total: ${getTotal(cart)}</h2>
        <Link to='/'>
        <button className='botonVaciar' onClick={()=>{emptyCart()}}>Vaciar carrito</button>
        </Link></div> :
        <div><h2>No hay productos en tu carrito</h2>
        <Link to='/'><button>Volver el inicio</button>
        </Link></div>
        }
       <Link to='/'> <button className='finalizar'>Finalizar compra</button>
       </Link></>
    )
}

export default Cart

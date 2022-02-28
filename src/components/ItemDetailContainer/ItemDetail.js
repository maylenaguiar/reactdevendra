import React, { useState, useContext } from 'react';
import { products } from '../../data/productos';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
  const [quantity, setQuantity] = useState(0)
  const {cart, setCart} = useContext(CartContext);
  const { addCart, removeCart}= useContext(CartContext);
  const {counter, setCounter} = useContext(CartContext);

  const onAdd = (qty)=>{
    setQuantity(qty)
    addCart(item, qty);
  };
  return (
    <div className='detalle'>
		<h3>{item.name}</h3>
        <h4>${item.price}</h4>
        <img className='detalleImg' src={item.img} alt='imagen del producto'/>
        
        { quantity === 0 ? <ItemCount onAdd={onAdd} /> : <Link to ='/Cart'> <button>Finalizar Compra</button></Link>}
    </div>
  )
}
 
export default ItemDetail
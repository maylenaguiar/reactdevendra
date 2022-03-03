import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({item}) => {
  const [quantity, setQuantity] = useState(0)
  const { addCart, cart}= useContext(CartContext);

  const onAdd = (qty)=>{
    setQuantity(qty)
    addCart(item, qty)
  }
  return (
    <div className='detalle'>
		<h3>Producto: {item.name}</h3>
    <h4>Precio: ${item.price}</h4>
    <img className='detalleImg' src={item.img} alt='imagen del producto'/>

    { quantity === 0 ? <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/> :
        <div className="botones"><Link to= '/Cart'><button className='boton'>Ir al Carrito</button></Link>
        <Link to= '/'><button className='boton'>Seguir comprando</button></Link></div>}  
    </div>
  )
}
 
export default ItemDetail
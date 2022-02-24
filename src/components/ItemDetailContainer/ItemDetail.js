import React, { useContext } from 'react';
import { products } from '../../data/productos';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  const {cart, setCart} = useContext(CartContext);
  const { addCart, removeCart}= useContext(CartContext);
  const {counter, setCounter} = useContext(CartContext);

  const handleAdd = () => {
    if (counter > 0){
        addCart({ 
          id:
          item.price
        });
    };
console.log(addCart);
}
  return (
    <div>
		<h3>{item.name}</h3>
        <h4>${item.price}</h4>
        <img style ={{width:'300px'}}  src={item.img} alt='imagen'/>
        <ItemCount counter={counter}
        setCounter={setCounter} 
        onAdd={handleAdd}/>
        <button className='contador' onClick={handleAdd}>Agregar</button>
        <button className='contador'>Eliminar</button>
        <Link to ='/Cart'> <button className='contador'>Finalizar Compra</button>
        </Link>
    </div>
  )
}

export default ItemDetail
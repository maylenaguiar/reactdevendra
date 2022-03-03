import React from 'react'
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemView from '../Views/ItemView/ItemView';
import './Item.css';

 
const Item = ({ product }) => {
  return (
    <div className='producto'>
					<img style ={{width:'150px'}}  src={product.img} alt='imagen'/>
					<h3>{product.name}</h3>
          <h4>Precio ${product.price}</h4>
          <Link to =  {`/item/${product.id}`} > <button className='botonDetalle'>Ver detalle</button> </Link>
    </div> 
  )
}

export default Item
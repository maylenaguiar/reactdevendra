import React from 'react'
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import './Item.css';

 
const Item = ({ product }) => {
  return (
    <div className='producto'>
					<img style ={{width:'150px', height:'200px'}}  src={product.img} alt='imagen'/>
					<h3>{product.name}</h3>
          <h4>Precio ${product.price}</h4>
          <Link to =  {`/item/${product.id}`} > <button className='botonDetalle'>Ver detalle</button> </Link>
    </div> 
  )
}

export default Item
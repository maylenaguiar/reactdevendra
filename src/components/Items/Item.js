import React from 'react'
import { products } from '../../data/productos';
import './Item.css';


const Item = ({ img, name, price }) => {
  return (
    <div className='items'>
					<img style ={{width:'150px'}}  src={img} alt='imagen'/>
					<h3>{name}</h3>
          <h4>${price}</h4>
          <button>Ver detalle</button>
    </div>
  )
}

export default Item
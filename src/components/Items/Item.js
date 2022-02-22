import React from 'react'
import { Link } from 'react-router-dom';
import { products } from '../../data/productos';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemView from '../Views/ItemView/ItemView';
import './Item.css';


const Item = ({ img, name, price }) => {
  return (
    <div className='items'>
					<img style ={{width:'150px'}}  src={img} alt='imagen'/>
					<h3>{name}</h3>
          <h4>${price}</h4>
          <Link to ='/item/:id'> <button>Ver detalle</button> </Link>
    </div>
  )
}

export default Item
import React from 'react';
import { products } from '../../data/productos';

const ItemDetail = ({item}) => {
  return (
    <div>
		<h3>{item[1].name}</h3>
        <h4>${item[1].price}</h4>
        <img style ={{width:'300px'}}  src={item[1].img} alt='imagen'/>
    </div>
  )
}

export default ItemDetail
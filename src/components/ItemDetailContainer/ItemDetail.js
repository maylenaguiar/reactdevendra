import React from 'react';
import { products } from '../../data/productos';

const ItemDetail = ({item}) => {
  return (
    <div>
		<h3>{item[0].name}</h3>
        <h4>${item[0].price}</h4>
        <img style ={{width:'300px'}}  src={item[0].img} alt='imagen'/>
    </div>
  )
}

export default ItemDetail
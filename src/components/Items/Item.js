import React from 'react'
import { products } from '../../data/productos';

const Item = ({ img, name, price }) => {
  return (
    <div>
					<img src={img} alt='imagen'/>
					<h3>${name}</h3>
          <h4>{price}</h4>
    </div>
  )
}

export default Item
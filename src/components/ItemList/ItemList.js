import React from 'react';
import Item from '../Items/Item';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className='items'>
        {products.map((product) => {
					return <Item product={product} key={product.id} />;
				})}
    </div>
  )
}

export default ItemList 
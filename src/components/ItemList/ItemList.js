import React from 'react';
import Item from '../Items/Item';
import './ItemList';

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
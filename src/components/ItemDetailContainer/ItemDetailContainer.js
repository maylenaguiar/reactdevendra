import React, { useEffect, useState } from 'react';
import { traerProducto } from '../../data/productos';
import ItemDetail from './ItemDetail';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useParams } from 'react-router-dom';

 
const ItemDetailContainer = () => {

  const [item, setItem]= useState();
  const [loading, setLoading] = useState(true)
  let { productId } = useParams()
 
    useEffect(() => {
        traerProducto(productId).then(item => {
          setItem(item);
          setLoading(false);
        }).catch(error=> {
        console.log(error);
        })
    }, []);
    
  return (
    <>
       {loading ?
        <p>Cargando detalle de producto.</p>
       :
      <ItemDetail item={item} />
       }     
   </> 
  );
};

export default ItemDetailContainer
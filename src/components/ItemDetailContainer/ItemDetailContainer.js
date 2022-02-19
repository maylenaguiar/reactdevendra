import React, { useEffect, useState } from 'react';
import { traerProductos } from '../../data/productos';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem]= useState([]);
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        traerProductos
          .then((res) => {
          setItem(res);
          setLoading(!loading);
          console.log(res);
        })
          .catch((error) => {
            console.log(error);
        })
    }, []);
    
  return (
    <>
       {loading ?(
        <p>Cargando detalle de producto.</p>
       ):(
      <ItemDetail item={item} />
       )}     
   </> 
  );
};

export default ItemDetailContainer
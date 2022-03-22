import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/firebase/firebase';
 
const ItemDetailContainer = () => {

  const [item, setItem]= useState();
  const [loading, setLoading] = useState(true)
  let { productId } = useParams()
 
    useEffect(() => {
        setLoading(true)
        getProductById(productId).then(response =>{
          setItem(response)
        }).catch((error)=>{
          alert('error', error)
        }).finally(() =>{
          setLoading(false)
        })
  return (()=>{
    setItem()
  })
  }, [productId])
    return(
    <>
       {loading ?
        <p>Cargando detalle de producto.</p>
       :
       item ?
      <ItemDetail item={item} /> :
      <h2>El producto no existe</h2>
       }     
   </> 
  );
};

export default ItemDetailContainer
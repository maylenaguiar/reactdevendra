import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { useParams } from 'react-router-dom';
import { getDoc, doc} from 'firebase/firestore';
import { database } from '../../services/firebase/firebase';
 
const ItemDetailContainer = () => {

  const [item, setItem]= useState();
  const [loading, setLoading] = useState(true)
  let { productId } = useParams()
 
    useEffect(() => {
        setLoading(true)
        const docRef = doc(database, 'products', productId)
        getDoc(docRef).then(response =>{
          const product = {id: response.id, ...response.data()}
          setItem(product)
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
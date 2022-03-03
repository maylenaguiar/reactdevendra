import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { database } from '../../services/firebase/firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

    useEffect(() => {
    setLoading(true)
    const collectionRef = categoryId ?  
    query(collection(database, 'products'), where('category','==', categoryId)) :
    collection(database, 'products')

      getDocs(collectionRef).then(querySnapshot =>{
           const products = querySnapshot.docs.map(doc =>{
             return { id: doc.id, ...doc.data() }
           })
           setProducts(products)  
          }).finally(()=>{
            setLoading(false)
          })
        },[categoryId]);

  return(
  <div>
  {loading ?(
    <h1>Cargando...</h1>
  ) :(
    <>
    <h2 className='titulo'>Hola amigxs de Devendra</h2>
  <ItemList products={products}/>
  </>
  )}
</div>
  )};

export default ItemListContainer;

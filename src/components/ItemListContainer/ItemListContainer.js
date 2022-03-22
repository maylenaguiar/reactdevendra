import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { getProducts } from '../../services/firebase/firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

    useEffect(() => {
    setLoading(true)
      getProducts(categoryId).then(response =>{
        setProducts(response)
      }).catch((error)=>{
        alert('error', error)
      }).finally(()=>{
            setLoading(false)
      })
      return(()=>{
        setProducts()
      })
      },[categoryId]);

  return(
  <div>
  {loading ?(
    <h1>Cargando...</h1>
  ) :(
    <>
    <h2 className='titulo'>Devendra</h2>
  <ItemList products={products}/>
  </>
  )}
</div>
  )};

export default ItemListContainer;

import { useEffect, useState } from 'react';
import { traerProductos } from '../../data/productos';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
  return( 
  <>
  {loading ?(
    <h1>Cargando...</h1>
  ) :(
    <>
    <h2 style={{ color: "purple", backgroundColor: "black" }}>Hola amigxs de Devendra</h2>
  <ItemList products={products}/>
  <ItemCount/>
  </>
  )}
</>
  );
};

export default ItemListContainer;

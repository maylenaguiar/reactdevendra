import { NavLink } from "react-router-dom";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { getDocs , collection } from 'firebase/firestore';
import { database } from '../../services/firebase/firebase'


const Navbar = () => {
  const { totalCart, cart } = useContext(CartContext);
  const [categories, setCategories] = useState([])

    useEffect(()=>{
        getDocs(collection(database, 'categories')).then(res => {
            const categories = res.docs.map(cat=>{
                return { id: cat.id, ...cat.data()}
            })
            setCategories(categories)
        })
    },[])
  return ( 
      <nav className="container">
        <NavLink className='naveg' to='/'>Devendra</NavLink>
        {categories.map(cat=> <NavLink key={cat.id} to={`/category/${cat.id}`} className='naveg'>{cat.name}</NavLink> )}
        {totalCart(cart)>0 && <CartWidget />}
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
// import { Icon } from '@mui/material';

const Navbar = () => {
  const { totalCart, cart } = useContext(CartContext);
  return ( 
      <nav className="container">
      <ul>
        <Link className='naveg' to='/'>Devendra</Link>
        <Link className='naveg' to='/category/sahumerios'>Sahumerios</Link>
        <Link className='naveg' to='/category/velas'>Velas</Link>
        {totalCart(cart)>0 && <CartWidget />}
      </ul>
    </nav>
  );
};

export default Navbar;

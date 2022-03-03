import {useContext} from 'react';
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from '@mui/material';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { totalCart, cart } = useContext(CartContext)
  return (
    <Link to="/cart" className="cart">
      <ShoppingCartIcon /> <div>{totalCart(cart)}</div>
  	</Link>
  )
};

export default CartWidget;

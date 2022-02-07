import React from 'react';
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from '@mui/material';

const CartWidget = () => {
  return <div>
      <a className="cart" href="/">
      <ShoppingCartIcon/>
  	</a>
  </div>;
};

export default CartWidget;

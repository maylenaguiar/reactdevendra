import React, { createContext, useState } from 'react';


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addCart = (item) => {
		if (!cart.includes(item)) {
			return setCart([...cart, item]);
		  } else {
			return false;
	}
}
	const removeCart = (id) =>{
	const remove = cart.filter((i) => i.referencia !== id);
    setCart(remove);
	};

	const emptyCart = () => setCart([]);

	return (
		<CartContext.Provider value={[cart, setCart, addCart, removeCart, emptyCart]}>
			{children}
		</CartContext.Provider>
	);
};

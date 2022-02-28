import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addCart = (item, qty) => {
		if (isInCart(item.id)) {
			sumarQty(item.id, qty);
		} else {item.qty =qty;
			setCart([...cart, {...item, qty}])
 		} 
	}; 
	console.log(cart);
	const isInCart = (id) => {
		const validar = cart.some((producto)=> producto.id === id);
		return validar;
	};
	const sumarQty = (id, qty) => {
		const cartCopy = [...cart]
		cartCopy.forEach((prod) => prod.id === id  && (prod.qty += qty))
		setCart(cartCopy)
	};
	
	const removeCart = (id) =>{
	let newCart = [];
        cart.forEach(element => {
        if(element.id!==id){
			newCart.push(element)
		}});
        console.log(newCart);
        setCart(newCart)
	};

	const emptyCart = () => {setCart([]);
		this.props.history.push('/');
	};

	return (
		<CartContext.Provider value={{cart, setCart, addCart, removeCart, emptyCart }}>
			{children}
		</CartContext.Provider>
	);
};

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addCart = (item, qty) => {
		if (isInCart(item.id)) {
			sumarQty(item.id, qty);
		} else {
			setCart([...cart, {...item, qty}])} 
	}; 
	const isInCart = (id) => {
		return cart.some((producto)=> producto.id === id);
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
        setCart(newCart)
	};

	const emptyCart = () => {setCart([]);
		// this.props.history.push('/');
	};

	const totalCart = (cart)=>{
		let totalQty = 0;
		cart.forEach(e=>{totalQty+=e.qty})
		return totalQty
	};
	const getTotal = () => {
        let totalAmount = 0;
        cart.forEach(e=>{let amountByProduct = e.qty*e.price;
            totalAmount += amountByProduct})           
            return totalAmount
    }

	return (
		<CartContext.Provider value={{cart, setCart, addCart, removeCart, emptyCart, totalCart, getTotal }}>
			{children}
		</CartContext.Provider>
	);
};

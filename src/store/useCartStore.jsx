import {createContext, useEffect, useReducer, useState} from 'react';
import {storageReducer} from './global';

export const CartContext = createContext();

export function CartProvider({children}) {
	const [state, dispatch] = useReducer(storageReducer, {cart_products: []});
	const [loadedStorage, setLoadedStorage] = useState(false);

	const addToCart = (product) => {
		const products = [...state.cart_products];

		const productIndex = products.findIndex((p) => p.product.id === product.id);
		if (productIndex === -1) {
			dispatch({key: 'cart_products', value: [...products, {product, quantity: 1}]});
		} else {
			products[productIndex].quantity++;
			dispatch({key: 'cart_products', value: [...products]});
		}

		alert(`Product ${product.name} was added to cart`);
	};

	useEffect(() => {
		let cart_store = JSON.parse(localStorage.getItem('cart_store'));
		console.log(cart_store, 'cart_store');
		for (const key in cart_store) {
			dispatch({key, value: cart_store[key]});
		}
		setLoadedStorage(true);
	}, []);

	useEffect(() => {
		if (loadedStorage) {
			localStorage.setItem('cart_store', JSON.stringify(state));
		}
	}, [state, loadedStorage]);

	return <CartContext.Provider value={{state, dispatch, addToCart}}>{children}</CartContext.Provider>;
}

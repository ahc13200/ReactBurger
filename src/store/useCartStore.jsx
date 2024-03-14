import {createContext, useEffect, useReducer, useState} from 'react';
import {storageReducer} from './global';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export function CartProvider({children}) {
	const [state, dispatch] = useReducer(storageReducer, {cart_products: [], total: 0});
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

		toast.success(`${product.name} added to cart`, {
			style: {
				borderRadius: '30px',
				background: '#333',
				color: '#fff',
			},
			className: 'md:mt18',
		});
	};

	const products = [...state.cart_products];
	state.total = products.reduce((val, val1) => val + val1.product.price * val1.quantity, 0);

	const incrementQuantity = (product) => {
		const products = [...state.cart_products];
		const productIndex = products.findIndex((p) => p.product.id === product.id);
		products[productIndex].quantity++;
		dispatch({key: 'cart_products', value: [...products]});
	};

	const decrementQuantity = (product) => {
		const products = [...state.cart_products];
		const productIndex = products.findIndex((p) => p.product.id === product.id);
		products[productIndex].quantity--;
		if (products[productIndex].quantity == 0) {
			products.splice(productIndex, 1);
			toast.success(`${product.name} removed from cart`, {
				className: 'md:mt18 rounded-3xl z-300 bg-[#333] text-white p2',
			});
		}
		dispatch({key: 'cart_products', value: [...products]});
	};

	const deleteStorage = () => {
		const products = [...state.cart_products];
		products.length = 0;
		dispatch({key: 'cart_products', value: [...products]});
	};
	useEffect(() => {
		let cart_store = JSON.parse(localStorage.getItem('cart_store'));
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

	return (
		<CartContext.Provider value={{state, dispatch, addToCart, incrementQuantity, decrementQuantity, deleteStorage}}>
			{children}
		</CartContext.Provider>
	);
}

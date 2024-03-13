import {useContext} from 'react';
import CartItem from './CartItem';
import {CartContext} from '../../store/useCartStore';

export default function Cart({checkout}) {
	const {state} = useContext(CartContext);
	const productsList = state.cart_products;

	if (productsList.length === 0)
		return (
			<div className='flex justify-center hfull'>
				<h2 lt-md='text-xl' className='flex items-center'>
					There are no products in your cart!!
				</h2>
			</div>
		);

	return (
		<>
			<div className='scrollbox mt6 grid gap2 mb5'>
				{productsList.map((item) => {
					return (
						<div key={item.product?.id}>
							<CartItem product={item.product} quantity={item.quantity} />
						</div>
					);
				})}
			</div>
			<div className='mt-auto flex items-center justify-between'>
				<span lt-md='text-[1.1rem]' className='text-xl'>
					Total: ${state.total}
				</span>
				<div className='flex gap3'>
					<button
						onClick={checkout}
						className='outline-none border-none bg-gradient-to-r from-yellow-500 to-yellow-600 text-lg rounded-3xl p1 w30 cursor-pointer hover:(from-yellow-400 to-yellow-700) transition-all duration-300'
					>
						Checkout
					</button>
				</div>
			</div>
		</>
	);
}

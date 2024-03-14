import {Icon} from '@iconify/react';
import {CartContext} from '../../store/useCartStore';
import {useContext} from 'react';

// const baseURL = 'http://localhost:3000/';
const baseURL = 'https://api.burguer.regiondev.org/';

export default function Card({product, isMenu}) {
	const {addToCart} = useContext(CartContext);

	return (
		<div className=' rounded-3xl p3 bg-white:10 group'>
			<div className='min-h-60 overflow-hidden rounded-3xl '>
				<img
					src={baseURL + product.image}
					alt=''
					className='wfull hfull transform scale-105 group-hover:scale-110 transition-all duration-300'
				/>
			</div>
			{isMenu && (
				<div className='flex justify-end'>
					<span
						lt-xl='top-38'
						className='absolute bg-yellow-400/80 top-58  text-lg w-17 mx-3 my-5 text-center rounded-3xl w-25 font-bold cursor-pointer hover:bg-yellow-400/90'
					>
						Details
					</span>
				</div>
			)}
			<h2 className='text-center text-2xl mb-0'>{product.name}</h2>
			<div className='mx1 flex justify-between items-center'>
				<h1 text-2xl>$ {product.price}</h1>
				<div className='my-auto flex justify-end'>
					<button
						onClick={() => addToCart(product)}
						className='flex justify-center items-center w-20 p1 text-3xl bg-gradient-to-r from-yellow-500 to-yellow-600 border-none rounded-full hover:scale-110 transition duration-300 ease-in-out cursor-pointer'
					>
						<Icon icon='eva:shopping-cart-fill' />
					</button>
				</div>
			</div>
		</div>
	);
}

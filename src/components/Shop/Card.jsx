import {Icon} from '@iconify/react';

export default function Card({name, price, image}) {
	return (
		<div className='border border-solid border-1 border-stone-300 rounded-3xl'>
			<img src={image} alt='' className='rounded-3xl w-full' />
			<h2 className='text-center text-3xl mb-0'>{name}</h2>
			<div className='mx-5 grid grid-flow-col grid-cols-2'>
				<h1>$ {price}</h1>
				<div className='my-auto flex justify-end'>
					<button className='h-10 w-25 text-4xl bg-gradient-to-r from-yellow-500 to-yellow-600 border-none rounded-3xl hover:scale-110 transition duration-300 ease-in-out cursor-pointer'>
						<Icon icon='eva:shopping-cart-fill' />
					</button>
				</div>
			</div>
		</div>
	);
}

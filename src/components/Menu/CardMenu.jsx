import {Icon} from '@iconify/react';

export default function CardMenu({name, price, image}) {
	return (
		<div className='border border-solid border-1 border-stone-300 rounded-3xl'>
			<div className='flex justify-end'>
				<span className='absolute bg-orange-300 text-xl w-20 mx-5 my-5 text-center rounded-3xl w-25'>Details</span>
			</div>
			<img src={image} alt='' className='rounded-3xl w-full' />
			<h2 className='text-center text-3xl mb-0'>{name}</h2>
			<div className='mx-5 grid grid-flow-col grid-cols-2'>
				<h1>$ {price}</h1>
				<div className='my-auto flex justify-end'>
					<button className='h-10 w-25 text-4xl bg-orange-400 border-none rounded-3xl hover:scale-110 transition duration-300 ease-in-out cursor-pointer'>
						<Icon icon='eva:shopping-cart-fill' />
					</button>
				</div>
			</div>
		</div>
	);
}

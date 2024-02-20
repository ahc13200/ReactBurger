import {Icon} from '@iconify/react';

export default function Card({name, price, image, isMenu}) {
	return (
		<div className=' rounded-3xl p3 bg-white:10 group'>
			<div className='overflow-hidden rounded-3xl '>
				<img
					src={image}
					alt=''
					className='w-full hfull transform scale-105 group-hover:scale-110 transition-all duration-300'
				/>
			</div>
			{isMenu && (
				<div className='flex justify-end'>
					<span className='absolute bg-yellow-400/80 top-48 text-xl w-20 mx-3 my-5 text-center rounded-3xl w-25 font-bold cursor-pointer hover:bg-yellow-400/90'>
						Details
					</span>
				</div>
			)}
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
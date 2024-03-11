import {Icon} from '@iconify/react';

export default function CartItem({product, quantity}) {
	return (
		<div className='bg-white:10 max-h-8 rounded-2xl p4 flex justify-between items-center hover:bg-white:15'>
			<div className='flex gap4'>
				<span>{product.name}</span>
				<span>
					{quantity} x ${product.price}
				</span>
			</div>

			<div className='flex items-center gap3'>
				<Icon
					icon='ic:baseline-plus'
					className='flex justify-center text-xl items-center rounded-full p1 bg-yellow-400/80 hover:bg-yellow-400/90 cursor-pointer'
				/>
				<span className='text-sm'>{quantity}</span>
				<Icon
					icon='ri:subtract-fill'
					className='flex justify-center text-xl items-center rounded-full p1 bg-yellow-400/80 hover:bg-yellow-400/90 cursor-pointer'
				/>
			</div>
		</div>
	);
}

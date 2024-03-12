import {Icon} from '@iconify/react';
import {useContext} from 'react';
import {CartContext} from '../../store/useCartStore';

export default function CartItem({product, quantity}) {
	const {incrementQuantity, decrementQuantity} = useContext(CartContext);

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
					onClick={() => incrementQuantity(product)}
					icon='ic:baseline-plus'
					className='flex justify-center text-xl items-center rounded-full p1 bg-yellow-400/80 hover:bg-yellow-400/90 cursor-pointer'
				/>
				<span className='text-sm'>{quantity}</span>
				<Icon
					onClick={() => decrementQuantity(product)}
					icon='ri:subtract-fill'
					className='flex justify-center text-xl items-center rounded-full p1 bg-yellow-400/80 hover:bg-yellow-400/90 cursor-pointer'
				/>
			</div>
		</div>
	);
}

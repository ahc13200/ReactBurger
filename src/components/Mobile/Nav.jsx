import {Icon} from '@iconify/react';
import ItemHeader from '../Header/ItemHeader';
import {useContext, useRef} from 'react';
import ModalCart from '../Cart/Modal';
import {CartContext} from '../../store/useCartStore';

export default function Nav() {
	const modal = useRef();

	function handleOpenCart() {
		modal.current.open();
	}
	const {state} = useContext(CartContext);
	const count = state.countItem;
	return (
		<>
			<ModalCart ref={modal} id='cart' />

			<div className='fixed xl:hidden wfull top-0 left-0 z-300 backdrop-blur-lg h8 p5 flex justify-between items-center '>
				<div className='flex items-center'>
					<img src='/logo.png' className='h-13 w-13 object-contain' />
				</div>
				<ul className='flex wrap list-none text-xl gap2 justify-end pr10'>
					<ItemHeader isMobile>
						<span className='font-semibold text-sm absolute top-2.5 right-15 bg-yellow-400/80 p0.3 w4 flex justify-center rounded-full'>
							{count}
						</span>
						<Icon onClick={handleOpenCart} icon='eva:shopping-cart-fill' />
					</ItemHeader>
				</ul>
			</div>
		</>
	);
}

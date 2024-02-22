import {Icon} from '@iconify/react';
import ItemHeader from '../Header/ItemHeader';
import {useRef} from 'react';

export default function Nav() {
	const modal = useRef();

	function handleOpenCart() {
		modal.current.open();
	}
	return (
		<div className='fixed xl:hidden wfull top-0 left-0 z-300 backdrop-blur-lg h8 p5 flex justify-between items-center '>
			<div className='flex items-center'>
				<img src='/logo.png' className='h-10 w-10 object-contain' />
			</div>
			<ul className='flex wrap list-none text-xl gap2 justify-end pr10'>
				<ItemHeader isMobile>
					<Icon icon='iconamoon:profile-fill' />
				</ItemHeader>
				<ItemHeader isMobile>
					<Icon onClick={handleOpenCart} icon='eva:shopping-cart-fill' />
				</ItemHeader>
			</ul>
		</div>
	);
}

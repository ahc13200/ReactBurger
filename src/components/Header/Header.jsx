import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';

import ItemHeader from '../Header/ItemHeader';
import {useContext, useRef} from 'react';
import ModalCart from '../Cart/Modal';
import {CartContext} from '../../store/useCartStore';

export default function Header() {
	const header = [
		{id: 0, name: 'Home', rute: '/'},
		{id: 1, name: 'Menu', rute: '/menu'},
		{id: 2, name: 'About', rute: '/about'},
		{id: 3, name: 'Shop', rute: '/shop'},
	];
	const modal = useRef();

	function handleOpenCart() {
		modal.current.open();
	}
	const {state} = useContext(CartContext);
	const count = state.countItem;

	return (
		<>
			<ModalCart ref={modal} id='cart' />
			<header className='lt-xl-hidden fixed top-0 z-999 backdrop-blur-lg w-full h-20 flex items-center pb-1'>
				<nav className='wfull'>
					<div className='justify-between px-20 flex'>
						<img src='/logo.png' className='mt-4 h-15 w-15 object-contain' />
						<ul className='flex wrap list-none gap-5 text-xl font-semibold'>
							{header.map((item) => {
								return (
									<NavLink
										key={item.id}
										to={item.rute}
										className={({isActive}) =>
											'no-underline ' + (isActive ? 'text-yellow-400 bg-white:10 rounded-xl flex items-center' : '')
										}
									>
										<ItemHeader>{item.name}</ItemHeader>
									</NavLink>
								);
							})}
						</ul>
						<ul className='flex wrap list-none text-2xl justify-end gap-3'>
							<ItemHeader>
								<span className='font-semibold text-sm absolute top-3 right-21 bg-yellow-400/80 p0.3 w4 flex justify-center rounded-full'>
									{count}
								</span>
								<Icon onClick={handleOpenCart} icon='eva:shopping-cart-fill' />
							</ItemHeader>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}

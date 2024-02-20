import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';

import ItemHeader from '../Header/ItemHeader';
import {useRef} from 'react';
import ModalCart from '../Cart/Modal';

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

	return (
		<>
			{/* <ModalCart ref={modal} /> */}
			<header className='fixed z-999 backdrop-blur-lg w-full h-20 flex items-center pb-0 pt-5'>
				<nav className='wfull'>
					<div className='justify-between px-40 flex'>
						<img
							src='/logo.png'
							className='mt-4 h-20 w-20 object-contain hover:scale-125 transition duration-300 ease-in-out'
						/>
						<ul className='flex wrap list-none gap-5 text-4xl md:text-2xl font-semibold'>
							{header.map((item) => {
								return (
									<NavLink
										key={item.id}
										to={item.rute}
										className={({isActive}) => 'no-underline ' + (isActive ? 'text-yellow-400' : '')}
									>
										<ItemHeader>{item.name}</ItemHeader>
									</NavLink>
								);
							})}
						</ul>
						<ul className='flex wrap list-none gap-8 text-3xl justify-end'>
							<ItemHeader>
								<Icon icon='iconamoon:profile-fill' />
							</ItemHeader>
							<ItemHeader>
								<Icon onClick={handleOpenCart} icon='eva:shopping-cart-fill' />
							</ItemHeader>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}

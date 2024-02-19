import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';

import ItemHeader from '../Header/ItemHeader';

export default function Header() {
	const header = [
		{id: 0, name: 'Home', rute: '/'},
		{id: 1, name: 'Menu', rute: '/menu'},
		{id: 2, name: 'About', rute: '/about'},
		{id: 3, name: 'Shop', rute: '/shop'},
	];
	return (
		<header className='fixed z-999 backdrop-blur-lg w-full h-30 flex items-center'>
			<nav className='wfull'>
				<div className='justify-between px-40 flex pt-8'>
					<img
						src='/logo.png'
						className='h-20 w-20 object-contain hover:scale-125 transition duration-300 ease-in-out'
					/>
					<ul className='flex wrap list-none gap-5 text-2xl font-semibold'>
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
							<Icon icon='eva:shopping-cart-fill' />
						</ItemHeader>
					</ul>
				</div>
			</nav>
		</header>
	);
}

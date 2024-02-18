import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';

import ItemHeader from '../Header/ItemHeader';

export default function Header() {
	return (
		// <div className='px-40 fixed z-999 backdrop-blur-lg w-full h-30'>
		<header className='fixed z-999 backdrop-blur-lg w-full h-30'>
			<nav>
				<div className='mx-40 grid grid-flow-col grid-cols-3 pt-8'>
					<img
						src='/logo.png'
						className='h-20 w-20 object-contain hover:scale-125 transition duration-300 ease-in-out'
					/>
					<ul className='flex wrap list-none gap-10 text-2xl font-semibold'>
						<NavLink to='/' className={({isActive}) => (isActive ? 'text-yellow-400' : 'no-underline')}>
							<ItemHeader>Home</ItemHeader>
						</NavLink>
						<NavLink to='/menu' className={({isActive}) => (isActive ? 'text-yellow-400' : 'no-underline')}>
							<ItemHeader>Manu</ItemHeader>
						</NavLink>
						<NavLink to='/about' className={({isActive}) => (isActive ? 'text-yellow-400' : 'no-underline')}>
							<ItemHeader>About</ItemHeader>
						</NavLink>
						<NavLink to='/shop' className={({isActive}) => (isActive ? 'text-yellow-400' : 'no-underline')}>
							<ItemHeader>Shop</ItemHeader>
						</NavLink>
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

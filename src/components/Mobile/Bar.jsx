import {Icon} from '@iconify/react';
import {NavLink} from 'react-router-dom';

import BarItem from './BarItem';

export default function Bar() {
	const bar = [
		{id: 0, icon: <Icon icon='solar:home-2-bold' />, name: 'Home', rute: '/'},
		{id: 1, icon: <Icon icon='ic:outline-restaurant-menu' />, name: 'Menu', rute: '/menu'},
		{id: 2, icon: <Icon icon='mdi:about' />, name: 'About', rute: '/about'},
		{id: 3, icon: <Icon icon='solar:shop-bold' />, name: 'Shop', rute: '/shop'},
	];

	return (
		<div className='fixed xl:hidden bottom-7 left-0 wfull h-16 z-300'>
			<div className='backdrop-blur-2xl rounded-full of-hidden p2 bg-white:10'>
				<div className='flex justify-around hfull'>
					{bar.map((item) => {
						return (
							<NavLink
								key={item.id}
								to={item.rute}
								className={({isActive}) => 'no-underline ' + (isActive ? 'text-yellow-400' : '')}
							>
								<BarItem icon={item.icon}>{item.name}</BarItem>
							</NavLink>
						);
					})}
				</div>
			</div>
		</div>
	);
}

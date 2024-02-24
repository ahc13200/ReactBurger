import {Outlet} from 'react-router-dom';

import Header from '../components/Header/Header';
import Bar from '../components/Mobile/Bar';
import Nav from '../components/Mobile/Nav';

function RootLayout() {
	return (
		<>
			<div>
				<Header />
				<Nav />
				<Bar />
			</div>

			<main p='x20 t30 b10' lt-xl='px-3 pt15 pb25' className='transition-all duration-300'>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;

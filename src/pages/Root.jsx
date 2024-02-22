import {Outlet} from 'react-router-dom';

import Header from '../components/Header/Header';
import Bar from '../components/Mobile/Bar';

function RootLayout() {
	return (
		<>
			<div lt-xl='px-5'>
				<Header />
				<Bar />
			</div>

			<main p='x20 t30 b10' lt-xl='px-3 pt8 pb20'>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;

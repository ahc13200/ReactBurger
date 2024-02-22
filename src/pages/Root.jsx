import {Outlet} from 'react-router-dom';

import Header from '../components/Header/Header';

function RootLayout() {
	return (
		<>
			<Header />
			<main px10 md:px15 lg:px20 pt20 pb10>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import RootLayout from './pages/Root';
import About from './pages/About';
import Shop from './pages/Shop';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/menu',
				element: <Menu />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/shop',
				element: <Shop />,
			},
		],
	},
]);

function App() {
	return (
		<main className='min-w-screen-xl'>
			<RouterProvider router={router} />
		</main>
	);
}

export default App;

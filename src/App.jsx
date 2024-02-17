import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import RootLayout from './pages/Root';
import About from './pages/About';

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

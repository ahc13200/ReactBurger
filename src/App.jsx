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
				index: true,
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
		<div h-full w-full>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

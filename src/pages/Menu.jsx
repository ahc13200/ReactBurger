import {useEffect, useState} from 'react';
import Card from '../components/Shop/Card';
import {listFetch} from '../composables/useListFetch';

const baseURL = 'http://localhost:3000/';

export default function Menu() {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		async function getList() {
			setProducts(await listFetch('products/1'));
		}
		getList();
	}, []);

	if (!products) return <h2 className='absolute text-2xl'>There is no availability of products in this category</h2>;

	return (
		<div className=''>
			<h1 mb10 lt-xl='mb5'>
				Menu
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 break-words'>
				{products.map((item) => {
					return (
						<div key={item.id}>
							<Card isMenu name={item.name} price={item.price} image={baseURL + item.image} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

import Card from './Card';
import {useEffect, useState} from 'react';
import {listFetch} from '../../composables/useListFetch';

const baseURL = 'http://localhost:3000/';

export default function TabContent({selectedTopic}) {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		async function getList() {
			setProducts(await listFetch(`products/${selectedTopic}`));
		}
		getList();
	}, [selectedTopic]);

	if (!products) return <h2 className='absolute text-2xl'>There is no availability of products in this category</h2>;

	return (
		<>
			{products.map((item) => {
				return (
					<div key={item.id}>
						<Card name={item.name} price={item.price} image={baseURL + item.image} />
					</div>
				);
			})}
		</>
	);
}

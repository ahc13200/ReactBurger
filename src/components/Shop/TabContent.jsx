import Card from './Card';
import {SHOP_PRODUCTS} from '../../store/store.js';

export default function TabContent({selectedTopic}) {
	return (
		<>
			{SHOP_PRODUCTS[selectedTopic] ? (
				SHOP_PRODUCTS[selectedTopic].map((item) => {
					return (
						<div key={item.id}>
							<Card name={item.name} price={item.price} image={item.image} />
						</div>
					);
				})
			) : (
				<h2 className='absolute text-4xl'>There is no availability of products in this category</h2>
			)}
		</>
	);
}

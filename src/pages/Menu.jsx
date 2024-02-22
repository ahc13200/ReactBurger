import Card from '../components/Shop/Card';
import {SHOP_PRODUCTS} from '../store/store';

export default function Menu() {
	return (
		<div className=''>
			<h1 mb10 lt-xl='mb5'>
				Menu
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-7 break-words'>
				{SHOP_PRODUCTS['Menu'].map((item) => {
					return (
						<div key={item.id}>
							<Card isMenu name={item.name} price={item.price} image={item.image} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

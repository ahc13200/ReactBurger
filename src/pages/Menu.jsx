import Card from '../components/Shop/Card';
import {SHOP_PRODUCTS} from '../store/store';

export default function Menu() {
	return (
		<div className='px-40 pt-32 pb-20'>
			<div className='mt-15 grid grid-cols-1 md:grid-cols-5 gap-7 break-words'>
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
